import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
// import { isNotFoundError } from 'ember-ajax/errors';
import { later } from '@ember/runloop';
import { debounce } from '@ember/runloop';
import { tracked } from '@glimmer/tracking';
import { notEmpty } from '@ember/object/computed';

export default class CollectionController extends Controller {
  @service deckManager;
  @service mastervault;
  @service store;

  webcamActive = false;

  @tracked isResyncAllDecksPending = false;

  @notEmpty('newDecks') hasNewDecks;

  newDecks = [];

  activeFolder = undefined;

  customDeck = {
    name: undefined,
    exp: undefined,
    houses: [],
  }

  get activeFolderDecks() {
    return this.activeFolder.decks;
  }

  get folders() {
    return this.model.folders;
  }

  addToLog(text) {
    let log = document.getElementById("log-window");
    log.innerHTML = text + '<br>' + log.innerHTML;
  }
  @action
  clearLog() {
    document.getElementById("log-window").innerHTML = '';
  }

  flashColor(isValid) {
    if(isValid) {
      this.set('validCodeFound', true);
      later(() => {
        this.set('validCodeFound', false);
      }, 2000);
    } else {
      this.set('invalidCodeFound', true);
      later(() => {
        this.set('invalidCodeFound', false);
      }, 2000);
    }
  }

  /**
   * Check if the deck is registerd on Master Vault
   * @param {string} deckId
   */
  checkDeckOnVault(deckId) {
    return this.get('mastervault').checkDeckCode(deckId).then((response) => {
      let deckName = response.name;
      this.addDeckByName(deckName);
      this.flashColor(true);
    }).catch((error) => {
      if (isNotFoundError(error)) {
        this.addToLog('New undiscovered deck found : ' + deckId);
        this.newDecks.pushObject({code: deckId});
      } else {
        console.error('Unexpected error with vault', error);
      }
      this.flashColor(false);
    });
  }

  getMasterVaultDeckDetails(name) {
    this.addToLog('Searching deck by name in MasterVault. Please wait.');
    return this.get('mastervault').searchDeckByName(name);
  }

  @action
  addDeckByName(name) {
    if(name && name.trim().length > 0) {
      debounce(this, this._addDeckByName, name, 500);
    }
  }

  _addDeckByName(name) {
    this.getMasterVaultDeckDetails(name).then( vault => {
      console.debug('Vault Data', vault);
      this.set('nbDeckFound', vault.count);
      this.set('decksFound', vault.data);
      if(vault.count == 1) {
        this.addDeck(vault.data[0]);
      } else {
        this.addToLog('Multiple decks found, please choose the right one');
      }
    });
  }

  @action
  selectFoundDeck(deck) {
    this.set('decksFoundSelected', deck);
  }

  @action
  deckNameChanged() {
    this.set('nbDeckFound', undefined);
  }

  // Custom Deck
  @action
  setCustomDeckExp(exp) {
    this.set('customDeck.exp', exp);
  }

  @action
  setCustomDeckHouses(houses) {
    this.set('customDeck.houses', houses);
  }

  @action
  async addCustomDeck() {
    // Ensure activeFolder is loaded
    if (!this.activeFolder) {
      try {
        // fetch the default folder properly
        this.activeFolder = await this.store.findRecord('deckFolder', 'default');
      } catch (err) {
        console.error('No active folder found:', err);
        return;
      }
    }

    let targetFolder = this.activeFolder;
    let newCustomDeck = this.deckManager.getCustomDeck(this.customDeck);

    try {
      let deck = await this.deckManager.saveNew(newCustomDeck);

      // Ensure hasMany is an array
      if (!Array.isArray(targetFolder.decks)) {
        targetFolder.decks = [];
      }

      if (!targetFolder.decks.find((d) => d.id === deck.id)) {
        targetFolder.decks.pushObject(deck);
        await targetFolder.save();
      }

      this.addToLog('Added custom deck ' + newCustomDeck.name);
    } catch (err) {
      console.error('Failed to add custom deck:', err);
    }
  }

  // @action
  // async addCustomDeck() {
  //   if (!this.activeFolder) {
  //     this.activeFolder = this.store.findRecord('deckFolder', 'default').then((folder) => {
  //       this.activeFolder = folder;
  //     });
  //
  //     if (!this.activeFolder) {
  //       console.error('No active folder selected');
  //       return;
  //     } else {
  //       console.error('Updated default folder');
  //     }
  //   }
  //
  //   try {
  //     // Convert custom deck data into a deck record
  //     let newCustomDeck = this.deckManager.getCustomDeck(this.customDeck);
  //
  //     // Save the deck via your deckManager service
  //     let deck = await this.deckManager.saveNew(newCustomDeck);
  //
  //     // Add to the folder's hasMany relationship safely
  //     if (!this.activeFolder.decks.includes(deck)) {
  //       this.activeFolder.decks.pushObject(deck);
  //       await this.activeFolder.save();
  //     }
  //
  //     // Log action
  //     this.addToLog(`Added custom deck ${newCustomDeck.name}`);
  //   } catch (error) {
  //     console.error('Failed to add custom deck:', error);
  //   }
  // }

  @action
  addDeck(deckData) {
    debounce(this, this._addDeck, deckData, 1000);
  }

  _addDeck(deckData) {
    let targetFolder = this.activeFolder;
    let importedDeck = this.deckManager.getDeckFromVault(deckData);

    this.deckManager.saveOrUpdate(importedDeck).then((deck) => {
      if (targetFolder.decks.find((d) => d.id === deck.id) === undefined) {
        targetFolder.decks.pushObject(deck);
        targetFolder.save();
      }
    });

    this.addToLog('Added deck '+deckData.name);
  }

  @action
  startWebcam() {
    this.set('webcamActive',true);
  }
  @action
  stopWebcam() {
    this.set('webcamActive',false);
  }

  @action
  onScanSuccess(found)  {
    let exp = '(?:https://www.keyforgegame.com/deck/)?([0-9A-Z]{5}-[0-9A-Z]{5}-[0-9A-Z]{5})';
    let match = found.text.match(exp);
    if(match){
      let deckPrivId = match[1];
      this.addToLog('Scanned a deck with QR code '+deckPrivId);
      this.addToLog('Searching in MasterVault. Please wait.');
      this.checkDeckOnVault(deckPrivId);

    } else {
      this.flashColor(false);
    }
    this.set('continueScanning', true);
  }

  // Scan and camera related stuff

  @action
  onScanError()  {

  }
  @action
  onCamerasFound(cameras)  {
    console.log(cameras.length + " cameras found", cameras);
    this.set('cameras', cameras);
  }
  @action
  switchCamera(camera) {
    this.set('camera', camera);
    this.set('cameraId', camera.deviceId);
  }
  @action
  onCamerasError()  {

  }

  // Collection related stuff

  @action
  clearDecks() {
    this.deckManager.removeAllDecks();
  }

  @action
  uploadDokCsv(file) {
    // For now send all to default folder
    if (file.name.endsWith('.csv')) {
      this.deckManager.loadFromCsv(file, this.activeFolder);
    }
  }

  @action
  dokResync() {
    this.isResyncAllDecksPending = true;
    this.deckManager.resyncAllDecks().then(() =>{
      console.log("resyncAllDecks DONE");
      this.isResyncAllDecksPending = false;
    })
  }

  // get SAS Data for decks
  @action
  updateDeckSas(deck, doneCallback) {
    console.log('Get SAS data for deck', deck);
    this.deckManager.updateDeckSAS(deck).then(() => {
      doneCallback({
        'dokCallSuccess': true,
        'deckUpdateSuccess': true
      });
    });
  }

  @action
  copyNewDecks() {

    let text = this.get('newDecks').map(d => d.code).join(", ");

    if (!navigator.clipboard) {
      var textArea = document.createElement("textarea");
      textArea.value = text;

      // Avoid scrolling to bottom
      textArea.style.top = "0";
      textArea.style.left = "0";
      textArea.style.position = "fixed";

      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();

      try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Fallback: Copying text command was ' + msg);
      } catch (err) {
        console.error('Fallback: Oops, unable to copy', err);
      }

      document.body.removeChild(textArea);
    } else {
      navigator.clipboard.writeText(text).then(function() {
        console.log('Async: Copying to clipboard was successful!');
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
    }
  }

}

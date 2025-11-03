import Model, { attr, hasMany } from '@ember-data/model';

export default class DeckFolderModel extends Model {
  @attr('string') name;
  @hasMany('deck', { async: true, inverse: null }) decks;

  get count() {
    return this.decks.length;
  }
}

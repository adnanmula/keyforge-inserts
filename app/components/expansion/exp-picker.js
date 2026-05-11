import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { CardSets } from 'burger-inserts/data/keyforge-data';

export default class ExpansionPickerComponent extends Component {
  
  @tracked selection = [];

  get expList() {
    return Object.entries(CardSets).map(([csv, data]) => ({
      csv,
      ...data
    }));
  }

  @action
  setExp(expansion) {
    if(this.args.onChange) {
      this.args.onChange(expansion);
    }
    this.selection = expansion;
  }
}
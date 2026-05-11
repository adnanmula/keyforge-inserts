import Component from '@glimmer/component';

export default class HouseIconComponent extends Component {
  baseIconPath = 'assets/icons/house/';

  get imgSrc() {
    let houseName = this.args.houseName;
    let style = this.args.printOptions.get('houseIconStyle');

    let extension = 'svg';

    if (style === 'round') {
      extension = 'png';
    }

    return this.baseIconPath + style + '/' + houseName + '.' + extension;
  }
}

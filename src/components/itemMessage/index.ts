import Component from '../../services/Block.ts';
import tpl from './tpl.ts';

export default class ItemMessage extends Component {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

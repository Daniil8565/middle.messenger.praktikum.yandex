import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexEntrance extends Component {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

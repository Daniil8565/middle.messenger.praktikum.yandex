import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexChangeData extends Component {
  render(): HTMLDivElement {
    console.log('IndexChangeData render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

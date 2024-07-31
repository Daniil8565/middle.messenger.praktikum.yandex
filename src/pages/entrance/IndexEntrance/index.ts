import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexEntrance extends Component {
  render(): HTMLDivElement {
    console.log('IndexEntrance render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

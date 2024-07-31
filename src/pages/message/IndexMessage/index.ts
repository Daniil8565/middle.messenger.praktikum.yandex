import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexMessage extends Component {
  render(): HTMLDivElement {
    console.log('IndexMessage render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class Index500 extends Component {
  render(): HTMLDivElement {
    console.log('500 render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

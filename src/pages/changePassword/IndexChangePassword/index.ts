import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexChangePassword extends Component {
  render(): HTMLDivElement {
    console.log('IndexChangePassword render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

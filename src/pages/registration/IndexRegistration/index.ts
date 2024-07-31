import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexRegistration extends Component {
  render(): HTMLDivElement {
    console.log('IndexRegistration render');
    return this.compile(tpl) as HTMLDivElement;
  }
}

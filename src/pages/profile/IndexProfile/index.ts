import tpl from './tpl.ts';
import Component from '../../../services/Block.ts';

export default class IndexProfile extends Component {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

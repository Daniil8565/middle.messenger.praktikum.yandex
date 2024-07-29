import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexChangeData extends Component {
  render() {
    console.log('IndexChangeData render');
    return this.compile(tpl);
  }
}

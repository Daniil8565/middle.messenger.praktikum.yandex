import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexChangePassword extends Component {
  render() {
    console.log('IndexChangePassword render');
    return this.compile(tpl);
  }
}

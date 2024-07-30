import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexRegistration extends Component {
  render() {
    console.log('IndexRegistration render');
    return this.compile(tpl);
  }
}

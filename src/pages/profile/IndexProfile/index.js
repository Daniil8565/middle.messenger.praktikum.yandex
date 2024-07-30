import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexProfile extends Component {
  render() {
    console.log('IndexProfile render');
    return this.compile(tpl);
  }
}

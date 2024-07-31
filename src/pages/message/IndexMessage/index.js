import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexMessage extends Component {
  render() {
    console.log('IndexMessage render');
    return this.compile(tpl);
  }
}

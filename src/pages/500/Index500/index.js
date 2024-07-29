import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class Index500 extends Component {
  render() {
    console.log('500 render');
    return this.compile(tpl);
  }
}

import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class Index404 extends Component {
  render() {
    console.log('404 render');
    return this.compile(tpl);
  }
}

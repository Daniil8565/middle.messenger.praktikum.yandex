import Component from '../../services/Block.js';
import tpl from './tpl.js';

export default class Description extends Component {
  render() {
    return this.compile(tpl);
  }
}

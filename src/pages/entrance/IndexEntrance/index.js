import tpl from './tpl.js';
import Component from '../../../services/Block.js';

export default class IndexEntrance extends Component {
  render() {
    console.log('IndexEntrance render');
    return this.compile(tpl);
  }
}

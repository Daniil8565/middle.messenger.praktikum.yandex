import Component from '../../services/Block.js';
import tpl from './tpl.js';

export default class ProfileData extends Component {
  render() {
    return this.compile(tpl);
  }
}
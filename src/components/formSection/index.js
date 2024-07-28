import Component from '../../services/Block.js';
import tpl from './tpl.js';

export default class FormSection extends Component {
  render() {
    return this.compile(tpl);
  }
}

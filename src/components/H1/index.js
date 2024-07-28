import Block from '../../services/Block.js';
import tpl from './tpl.js';

export default class H1 extends Block {
  render() {
    return this.compile(tpl);
  }
}

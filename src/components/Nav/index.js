import Block from '../../services/Block.js';
import tpl from './tpl.js';

export default class Nav extends Block {
  render() {
    console.log('Nav render');
    return this.compile(tpl);
  }
}

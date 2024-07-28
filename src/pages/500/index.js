import Block from '../../services/Block.js';
import tpl from './tpl';

export default class Index500 extends Block {
  render() {
    console.log('500 render');
    return this.compile(tpl);
  }
}

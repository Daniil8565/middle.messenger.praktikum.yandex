import Block from '../../services/Block.js';
import tpl from './tpl';

export default class IndexChangeData extends Block {
  render() {
    console.log('IndexChangeData render');
    return this.compile(tpl);
  }
}

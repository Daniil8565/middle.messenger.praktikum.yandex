import Block from '../../services/Block.js';
import tpl from './tpl.js';

export default class Nav extends Block {
  render() {
    console.log('Nav render');
    return this.compile(tpl);
    // return this.compile{{{items}}}
  }

  addEvents() {
    super.addEvents();

    this._element.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', this._props.events.click);
    });
  }
}

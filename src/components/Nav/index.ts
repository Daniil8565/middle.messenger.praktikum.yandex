import Block from '../../services/Block.ts';
import tpl from './tpl.ts';

export default class Nav extends Block {
  render(): HTMLDivElement {
    console.log('Nav render');
    return this.compile(tpl) as HTMLDivElement;
    // return this.compile{{{items}}}
  }

  // addEvents() {
  //   super.addEvents();

  //   this._element.querySelectorAll('a').forEach((a) => {
  //     a.addEventListener('click', this._props.events.click);
  //   });
  // }
}

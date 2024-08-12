import tpl from "./tpl.ts";
import Block from "../../../services/Block.ts";

export default class Index404 extends Block {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

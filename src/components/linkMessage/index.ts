import Block from "../../services/Block.ts";
import tpl from "./tpl.ts";

export default class LinkMessage extends Block {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

import IBlock from "../../services/IBlock";
import isEqual from "./functionIsEqual";
import render from "../render";

export default class Route {
  private _pathname: string;
  private _props: Record<string, any>;
  private _block: IBlock | null;

  constructor(pathname: string, Block: IBlock, props: Record<string, any>) {
    this._pathname = pathname;
    this._block = Block;
    this._props = props;
  }

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave() {
    if (this._block) {
      this._block.remove();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    if (this._block) {
      render(this._props.rootQuery, this._block);
      // this._block.show();
      return;
    }
  }
}

import IBlock from "../../services/IBlock";
import isEqual from "./functionIsEqual";
import render from "../render";

export default class Route {
  private _pathname: string;
  private _block: IBlock | null;
  private _props: Record<string, any>;

  constructor(
    pathname: string,
    indexBlock: IBlock,
    props: Record<string, any>
  ) {
    this._pathname = pathname;
    this._block = indexBlock;
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
      this._block.hide();
    }
  }

  match(pathname: string) {
    return isEqual(pathname, this._pathname);
  }

  render() {
    console.log("render");
    if (this._block) {
      render(this._props.rootQuery, this._block);
      return;
    }
    // this._block.show();
  }
}

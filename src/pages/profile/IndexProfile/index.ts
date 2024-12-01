import tpl from "./tpl.ts";
import Component from "../../../services/Block.ts";

// import mapUserToProps from "../../../utils/API/mapUserToProps/index.ts";

export default class IndexProfile extends Component {
  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

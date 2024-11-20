import tpl from "./tpl.ts";
import Component from "../../../services/Block.ts";
import store from "../../../utils/API/store.ts";
import { StoreEvents } from "../../../utils/API/store.ts";
// import mapUserToProps from "../../../utils/API/mapUserToProps/index.ts";
import UserLoginController from "../../../utils/API/UserLoginController/index.ts";

export default class IndexProfile extends Component {
  constructor(tagName: string, props: Record<string, unknown>) {
    // let state = mapUserToProps(store.getState());
    // console.log(state);
    super(tagName, props);

    let tmp = new UserLoginController();
    tmp.getData();

    // подписываемся на событие
    store.attach(StoreEvents.Updated, () => {
      // вызываем обновление компонента, передав данные из хранилища
      this.setProps(store.getState());
    });
  }

  render(): HTMLDivElement {
    return this.compile(tpl) as HTMLDivElement;
  }
}

import tpl from "./tpl.ts";
import Component from "../../../services/Block.ts";
import store, { StoreEvents } from "../../../utils/API/store.ts";

export default class IndexEntrance extends Component {
  constructor(tagName: string, props: Record<string, unknown>) {
    super(tagName, props);
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

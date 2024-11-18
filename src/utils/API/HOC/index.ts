import store, { StoreEvents } from "../store";
import { Indexed } from "../store";
import isEqual from "../isEqual";
import Block from "../../../services/Block";

export default function connect(mapStateToProps: (state: Indexed) => Indexed) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(tagName: string, props: Record<string, unknown>) {
        // сохраняем начальное состояние
        let state = mapStateToProps(store.getState());
        let tmp = new Block();
        tmp.hide();

        super(tagName, { ...props, ...state });

        // подписываемся на событие
        store.attach(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());

          // если что-то из используемых данных поменялось, обновляем компонент
          if (!isEqual(state, newState)) {
            this.setProps({ ...newState });
          }

          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
}

import store, { StoreEvents } from "../store.ts";
import { Indexed } from "../store.ts";
// import isEqual from "../isEqual";
import Block from "../../../services/Block.ts";
import isEqual from "../isEqual/index.ts";

export default function connect(
  mapStateToProps: (state: Indexed) => Record<string, unknown>
) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(tagName: string, props: Record<string, unknown>) {
        let state = mapStateToProps(store.getState());
        super(tagName, { ...props, ...state });
        store.attach(StoreEvents.Updated, () => {
          const newState = mapStateToProps(store.getState());
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

new Block();

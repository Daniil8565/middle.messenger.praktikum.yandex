import store, { StoreEvents } from "../store";
import { Indexed } from "../store";
// import isEqual from "../isEqual";
import Block from "../../../services/Block";
import UserLoginController from "../UserLoginController";
export default function connect(
  mapStateToProps: (state: Indexed) => Record<string, unknown>
) {
  return function (Component: typeof Block) {
    return class extends Component {
      constructor(tagName: string, props: Record<string, unknown>) {
        // сохраняем начальное состояние
        let tmp = new UserLoginController();
        console.log("Запрашиваем данные у контроллера");
        tmp.getData(); // делаю запрос на получение данных от сервера
        let state = mapStateToProps(store.getState());
        console.log(
          "Выборка данные после работы функции mapStateToProps",
          state
        );
        super(tagName, { ...props, ...state });
        // подписываемся на событие
        store.attach(StoreEvents.Updated, () => {
          // при обновлении получаем новое состояние
          const newState = mapStateToProps(store.getState());
          // если что-то из используемых данных поменялось, обновляем компонент
          // if (!isEqual(state, newState)) {
          console.log(
            "Выполнилась функция при получении данных с сервера",
            newState
          );
          this.setProps({ ...newState });
          // }
          // не забываем сохранить новое состояние
          state = newState;
        });
      }
    };
  };
}

new Block();

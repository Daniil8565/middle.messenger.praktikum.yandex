// import store, { StoreEvents } from "./Store.ts";
// import Block from "./Block.ts";

// class UserController {
//     public getUser() {
//       UserAPI.getUser()
//                .then(data => store.set('user', data);
//     }
// }

// class UserProfile extends Block {
//   constructor(...args) {
//     super(...args);

//     // запрашиваем данные у контроллера
//     UserController.getUser();

//     // подписываемся на событие
//     store.on(StoreEvents.Updated, () => {
//       // вызываем обновление компонента, передав данные из хранилища
//       this.setProps(store.getState());
//     });
//   }

//   render() {
//     // внутри рендер в this.props будут достпны данные из хранилища
//   }
// }

// export default UserProfile;

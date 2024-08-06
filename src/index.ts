import { default as renderDOM } from './utils/render.ts';
import page from './pages/404/index.ts';
import Index500 from './pages/500/index.ts';
import ChangeData from './pages/changeData/index.ts';
import ChangePassword from './pages/changePassword/index.ts';
import Entrance from './pages/entrance/index.ts';
import Profile from './pages/profile/index.ts';
import registration from './pages/registration/index.ts';
import message from './pages/message/index.ts';
import './normalize.sass';
import './style.sass';

//  Получаем ссылки из навигации
const links = document.querySelectorAll('nav a');
let mas = [
  page,
  Index500,
  ChangeData,
  ChangePassword,
  Entrance,
  Profile,
  registration,
  message,
];
//  Обработчик событий для ссылок
links.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const tegNav = document.querySelector('nav') as HTMLElement;
    tegNav.style.display = 'none';
    for (let i = 0; i < links.length; i++) {
      mas[i].hide();
      if (i == index) {
        mas[i].flex();
      }
      // if (
      //   (i == index && mas[i] == message) ||
      //   (i == index && mas[i] == registration) ||
      //   (i == index && mas[i] == Profile) ||
      //   (i == index && mas[i] == Entrance) ||
      //   (i == index && mas[i] == ChangePassword) ||
      //   (i == index && mas[i] == ChangeData) ||
      //   (i == index && mas[i] == Index500) ||
      //   (i == index && mas[i] == page)
      // ) {
      //   mas[i].flex();
      // }
    }
    // for (let i = 0; i < links.length; i++) {
    //   if (i == index) {
    //     mas[i].show();
    //   }
    // }
    renderDOM('.app', mas[index]);
  });
});

import { default as renderDOM } from './utils/render';
import page from './pages/404';
import Index500 from './pages/500';
import ChangeData from './pages/changeData';
import ChangePassword from './pages/changePassword';
import Entrance from './pages/entrance/index.js';
import Profile from './pages/profile/index.js';
import registration from './pages/registration/index.js';
import './normalize.sass';
import './style.sass';

//  Получаем ссылки из навигации
const links = document.querySelectorAll('nav a');
console.log(ChangePassword);
let mas = [
  page,
  Index500,
  ChangeData,
  ChangePassword,
  Entrance,
  Profile,
  registration,
];
//  Обработчик событий для ссылок
links.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const tegNav = document.querySelector('nav');
    tegNav.style.display = 'none';
    for (let i = 0; i < links.length; i++) {
      mas[i].hide();
      if (i == index) {
        mas[i].show();
      }
    }
    // for (let i = 0; i < links.length; i++) {
    //   if (i == index) {
    //     mas[i].show();
    //   }
    // }
    renderDOM('.container', mas[index]);
  });
});

import { default as renderDOM } from './utils/render';
import page from './pages/404';
import Nav from './components/Nav/index.js';
import Link from './components/link';
import Index500 from './pages/500';
import ChangeData from './pages/changeData';
import ChangePassword from './pages/changePassword';

const nav = new Nav('nav', {
  //   items: [
  //     { url: '/', title: 'Главная' },
  //     { url: '/form', title: 'Формой' },
  //   ],
  //   items: [
  //     new Link('Li', { url: '/', title: 'Главная' }),
  //     new Link('Li', { url: '/form', title: 'Формой' }),
  //   ],
  items: [
    { url: '/', title: 'Главная' },
    { url: '/404', title: '404' },
    { url: '/500', title: '500' },
    { url: '/entrance', title: 'entrance' },
    { url: '/profile', title: 'profile' },
    { url: '/registration', title: 'registration' },
  ],

  events: {
    click: (e) => {
      if (e.target && e.target.getAttribute('href')) {
        console.log('link clicked');
        nav.hide();
        page.show();
        renderDOM('.app', page);
        // window.location.href = e.target.getAttribute('href');
        // Получаем URL ссылки
        // const targetUrl = e.target.getAttribute('href');

        // // Обновляем URL в браузере с помощью History API
        // window.history.pushState({}, '', targetUrl);
      } else {
        console.log('No link clicked');
      }
    },
  },
});

//  Получаем ссылки из навигации
const links = document.querySelectorAll('nav a');
console.log(ChangePassword);
let mas = [nav, page, Index500, ChangeData, ChangePassword];
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
    renderDOM('.app', mas[index]);
  });
});

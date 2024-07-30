import Button from '../../components/button/index.js';
import IndexEntrance from './IndexEntrance/index.js';
import Link from '../../components/link/index.js';
import './style.sass';

const button = new Button('button', {
  title: 'Авторизоваться',
  attr: {
    class: 'entrance__button',
  },
});

const link = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'entrance__link',
  },
  title: 'Нет аккаунта?',
});

const Entrance = new IndexEntrance('div', {
  title: 'Вход',
  description1: 'Логин',
  description2: 'Пароль',
  button: button,
  link: link,
  attr: {
    class: 'entrance__content',
  },
});

export default Entrance;

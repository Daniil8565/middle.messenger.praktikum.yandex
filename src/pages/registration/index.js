import Button from '../../components/button/index.js';
import IndexRegistration from './IndexRegistration/index.js';
import Link from '../../components/link/index.js';
import './style.sass';

const button = new Button('button', {
  title: 'Зарегестрироваться',
  attr: {
    class: 'registration__button',
  },
});

const link = new Link('a', {
  attr: {
    href: '../index.html',
    class: 'entrance__link',
  },
  title: 'Войти',
});

const registration = new IndexRegistration('div', {
  title: 'Регистрация',
  description1: 'Почта',
  description2: 'Логин',
  description3: 'Имя',
  description4: 'Фамилия',
  description5: 'Телефон',
  description6: 'Пароль',
  description7: 'Пароль(ещё раз)',
  button: button,
  link: link,
  attr: {
    class: 'container',
  },
});

export default registration;

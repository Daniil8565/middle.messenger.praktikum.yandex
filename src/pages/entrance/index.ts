import Button from '../../components/button/index.ts';
import IndexEntrance from './IndexEntrance/index.ts';
import Link from '../../components/link/index.ts';
import DataCollection from '../../utils/DataCollection/index.ts';
import Form from '../../components/form/index.ts';
import Label from '../../components/label/index.ts';
import Input from '../../components/input/index.ts';
import Error from '../../components/Error/index.ts';
import './style.sass';
import CheckLogin from '../../utils/CheckingData/CheckLogin/index.ts';
import CheckPassword from '../../utils/CheckingData/CheckPassword/index.ts';

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

const forma = new Form('form', {
  items: [
    new Label('label', {
      description: 'Логин',
      attr: {
        class: 'labelEntrance',
        for: 'text',
      },
    }),
    new Input('input', {
      attr: {
        class: 'entrance__input',
        type: 'text',
        id: 'login',
        name: 'login',
      },
      events: {
        blur: CheckLogin,
      },
    }),
    new Error('span', {
      attr: {
        class: 'error-message',
        id: 'loginError',
      },
    }),
    new Label('label', {
      description: 'Пароль',
      attr: {
        class: 'labelEntrance',
        for: 'password',
      },
    }),
    new Input('input', {
      attr: {
        class: 'entrance__input',
        type: 'password',
        id: 'password',
        name: 'password',
      },
      events: {
        blur: CheckPassword,
      },
    }),
    new Error('span', {
      attr: {
        class: 'error-message',
        id: 'passwordError',
      },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
  },
  attr: {
    class: 'entrance__form',
    id: 'Form',
  },
});

const Entrance = new IndexEntrance('div', {
  title: 'Вход',
  form: forma,
  link: link,
  attr: {
    class: 'container',
  },
});

export default Entrance;

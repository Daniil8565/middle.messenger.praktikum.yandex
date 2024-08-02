import Avatar from '../../components/avatar/index.ts';
import FormSection from '../../components/formSection/index.ts';
import Button from '../../components/button/index.ts';
import IndexChangePassword from './IndexChangePassword/index.ts';
import DataCollection from '../../utils/DataCollection/index.ts';
import Form from '../../components/form/index.ts';
import './style.sass';

const avatar = new Avatar('div', {
  attr: {
    class: 'avatar',
  },
});

const button = new Button('button', {
  title: 'Сохранить',
  attr: {
    class: 'button',
  },
});

const forma = new Form('form', {
  items: [
    new FormSection('div', {
      for: 'oldPassword',
      type: 'password',
      id: 'oldPassword',
      name: 'oldPassword',
      description: 'Старый пароль',
      attr: {
        class: 'form__content',
      },
    }),
    new FormSection('div', {
      for: 'newPassword',
      type: 'password',
      id: 'newPassword',
      name: 'newPassword',
      description: 'Новый пароль',
      attr: {
        class: 'form__content',
      },
    }),
    new FormSection('div', {
      for: 'repeatPassword',
      type: 'password',
      id: 'repeatPassword',
      name: 'repeatPassword',
      description: 'Повторите новый пароль',
      attr: {
        class: 'form__content',
      },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
  },
  attr: {
    class: 'form',
    id: 'Form',
  },
});

const ChangePassword = new IndexChangePassword('div', {
  avatar: avatar,
  form: forma,
  button: button,
  attr: {
    class: 'container',
  },
});

export default ChangePassword;

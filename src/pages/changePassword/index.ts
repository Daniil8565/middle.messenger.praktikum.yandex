import Avatar from '../../components/avatar/index.ts';
import FormSection from '../../components/formSection/index.ts';
import Button from '../../components/button/index.ts';
import IndexChangePassword from './IndexChangePassword/index.ts';
import './style.sass';

const avatar = new Avatar('div', {
  attr: {
    class: 'avatar',
  },
});
const formSection = new FormSection('div', {
  for: 'oldPassword',
  type: 'password',
  id: 'oldPassword',
  name: 'oldPassword',
  description: 'Старый пароль',
  attr: {
    class: 'form__content',
  },
});

const formSection2 = new FormSection('div', {
  for: 'newPassword',
  type: 'password',
  id: 'newPassword',
  name: 'newPassword',
  description: 'Новый пароль',
  attr: {
    class: 'form__content',
  },
});

const formSection3 = new FormSection('div', {
  for: 'repeatPassword',
  type: 'password',
  id: 'repeatPassword',
  name: 'repeatPassword',
  description: 'Повторите новый пароль',
  attr: {
    class: 'form__content',
  },
});

const button = new Button('button', {
  title: 'Сохранить',
  attr: {
    class: 'button',
  },
});

const ChangePassword = new IndexChangePassword('div', {
  avatar: avatar,
  formSection: formSection,
  formSection2: formSection2,
  formSection3: formSection3,
  button: button,
  attr: {
    class: 'container',
  },
});

export default ChangePassword;

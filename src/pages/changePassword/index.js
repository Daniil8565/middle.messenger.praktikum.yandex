import Avatar from '../../components/avatar/index.js';
import FormSection from '../../components/formSection/index.js';
import ProfileButton from '../../components/profileButton/index.js';
import IndexChangePassword from './IndexChangePassword/index.js';

const avatar = new Avatar('div', {});
const formSection = new FormSection('div', {
  for: 'oldPassword',
  type: 'password',
  id: 'oldPassword',
  name: 'oldPassword',
  description: 'Старый пароль',
});

const formSection2 = new FormSection('div', {
  for: 'newPassword',
  type: 'password',
  id: 'newPassword',
  name: 'newPassword',
  description: 'Новый пароль',
});

const formSection3 = new FormSection('div', {
  for: 'repeatPassword',
  type: 'password',
  id: 'repeatPassword',
  name: 'repeatPassword',
  description: 'Повторите новый пароль',
});

const button = new ProfileButton('button', {
  title: 'Сохранить',
});

const ChangePassword = new IndexChangePassword('div', {
  avatar: avatar,
  formSection: formSection,
  formSection2: formSection2,
  formSection3: formSection3,
  button: button,
});

export default ChangePassword;

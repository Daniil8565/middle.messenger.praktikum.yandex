import Avatar from '../../components/avatar/index.js';
import FormSection from '../../components/formSection/index.js';
import ProfileButton from '../../components/profileButton/index.js';
import IndexChangeData from './IndexChahgeData/index.js';

const avatar = new Avatar('div', {});
const formSection = new FormSection('div', {
  for: 'email',
  type: 'email',
  id: 'email',
  name: 'email',
  description: 'Почта',
});

const formSection2 = new FormSection('div', {
  for: 'login',
  type: 'text',
  id: 'login',
  name: 'login',
  description: 'Логин',
});

const formSection3 = new FormSection('div', {
  for: 'first_name',
  type: 'text',
  id: 'first_name',
  name: 'first_name',
  description: 'Имя',
});

const formSection4 = new FormSection('div', {
  for: 'second_name',
  type: 'text',
  id: 'second_name',
  name: 'second_name',
  description: 'Фамилия',
});

const formSection5 = new FormSection('div', {
  for: 'display_name',
  type: 'text',
  id: 'display_name',
  name: 'display_name',
  description: 'Имя в чате',
});

const formSection6 = new FormSection('div', {
  for: 'tel',
  type: 'tel',
  id: 'tel',
  name: 'phone',
  description: 'Телефон',
});

const button = new ProfileButton('button', {
  title: 'Сохранить',
});
console.log('---');
const ChangeData = new IndexChangeData('div', {
  avatar: avatar,
  formSection: formSection,
  formSection2: formSection2,
  formSection3: formSection3,
  formSection4: formSection4,
  formSection5: formSection5,
  formSection6: formSection6,
  button: button,
});

export default ChangeData;

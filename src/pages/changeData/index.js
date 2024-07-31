import Avatar from '../../components/avatar/index.js';
import FormSection from '../../components/formSection/index.js';
import IndexChangeData from './IndexChahgeData/index.js';
import Button from '../../components/button/index.js';
import './style.sass';

const avatar = new Avatar('div', {
  attr: {
    class: 'avatar',
  },
});
const formSection = new FormSection('div', {
  for: 'email',
  type: 'email',
  id: 'email',
  name: 'email',
  description: 'Почта',
  attr: {
    class: 'form__content',
  },
});

const formSection2 = new FormSection('div', {
  for: 'login',
  type: 'text',
  id: 'login',
  name: 'login',
  description: 'Логин',
  attr: {
    class: 'form__content',
  },
});

const formSection3 = new FormSection('div', {
  for: 'first_name',
  type: 'text',
  id: 'first_name',
  name: 'first_name',
  description: 'Имя',
  attr: {
    class: 'form__content',
  },
});

const formSection4 = new FormSection('div', {
  for: 'second_name',
  type: 'text',
  id: 'second_name',
  name: 'second_name',
  description: 'Фамилия',
  attr: {
    class: 'form__content',
  },
});

const formSection5 = new FormSection('div', {
  for: 'display_name',
  type: 'text',
  id: 'display_name',
  name: 'display_name',
  description: 'Имя в чате',
  attr: {
    class: 'form__content',
  },
});

const formSection6 = new FormSection('div', {
  for: 'tel',
  type: 'tel',
  id: 'tel',
  name: 'phone',
  description: 'Телефон',
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
  attr: {
    class: 'container',
  },
});

export default ChangeData;

import Avatar from '../../components/avatar/index.ts';
import FormSection from '../../components/formSection/index.ts';
import IndexChangeData from './IndexChahgeData/index.ts';
import Button from '../../components/button/index.ts';
import './style.sass';
import DataCollection from '../../utils/DataCollection/index.ts';
import Form from '../../components/form/index.ts';
import CheckEmail from '../../utils/CheckingData/CheckEmail/index.ts';
import CheckLogin from '../../utils/CheckingData/CheckLogin/index.ts';
import CheckName from '../../utils/CheckingData/CheckName/index.ts';
import CheckSurname from '../../utils/CheckingData/CheckSurname/index.ts';
import CheckPhone from '../../utils/CheckingData/CheckPhone/index.ts';

const avatar = new Avatar('div', {
  attr: {
    class: 'avatar',
  },
});

const button = new Button('button', {
  title: 'Сохранить',
  attr: {
    class: 'button',
    type: 'submit',
  },
});

const forma = new Form('form', {
  items: [
    new FormSection('div', {
      for: 'email',
      type: 'email',
      id: 'email',
      name: 'email',
      description: 'Почта',
      attr: {
        class: 'form__content',
        events: CheckEmail,
      },
      SpanID: 'emailError',
    }),
    new FormSection('div', {
      for: 'login',
      type: 'text',
      id: 'login',
      name: 'login',
      description: 'Логин',
      attr: {
        class: 'form__content',
        events: CheckLogin,
      },
      SpanID: 'loginError',
    }),
    new FormSection('div', {
      for: 'first_name',
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      description: 'Имя',
      attr: {
        class: 'form__content',
        events: CheckName,
      },
      SpanID: 'firstNameError',
    }),
    new FormSection('div', {
      for: 'second_name',
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      description: 'Фамилия',
      attr: {
        class: 'form__content',
        events: CheckSurname,
      },
      SpanID: 'secondNameError',
    }),
    new FormSection('div', {
      for: 'display_name',
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      description: 'Имя в чате',
      attr: {
        class: 'form__content',
      },
      SpanID: '',
    }),
    new FormSection('div', {
      for: 'tel',
      type: 'tel',
      id: 'tel',
      name: 'phone',
      description: 'Телефон',
      attr: {
        class: 'form__content',
        events: CheckPhone,
      },
      SpanID: 'phoneError',
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

const ChangeData = new IndexChangeData('div', {
  avatar: avatar,
  form: forma,
  attr: {
    class: 'container',
  },
});

export default ChangeData;

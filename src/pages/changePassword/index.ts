import Avatar from '../../components/avatar/index.ts';
import FormSection from '../../components/formSection/index.ts';
import Input from '../../components/input/index.ts';
import Button from '../../components/button/index.ts';
import IndexChangePassword from './IndexChangePassword/index.ts';
import DataCollection from '../../utils/DataCollection/index.ts';
import Form from '../../components/form/index.ts';
import './style.sass';
import CheckOldPassword from '../../utils/CheckingData/CheckOldPassword/index.ts';
import CheckNewPassword from '../../utils/CheckingData/CheckNewPassword/index.ts';
import CheckRepeatPassword from '../../utils/CheckingData/CheckRepeatPassword/index.ts';

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

const input = new Input('input', {
  attr: {
    class: 'input',
    type: 'password',
    id: 'oldPassword',
    name: 'oldPassword',
  },
  events: {
    blur: CheckOldPassword,
  },
});

const input2 = new Input('input', {
  attr: {
    class: 'input',
    type: 'password',
    id: 'newPassword',
    name: 'newPassword',
  },
  events: {
    blur: CheckNewPassword,
  },
});

const input3 = new Input('input', {
  attr: {
    class: 'input',
    type: 'password',
    id: 'repeatPassword',
    name: 'repeatPassword',
  },
  events: {
    blur: CheckRepeatPassword,
  },
});

const forma = new Form('form', {
  items: [
    new FormSection('div', {
      for: 'oldPassword',
      description: 'Старый пароль',
      input: input,
      SpanID: 'oldPasswordError',
      class: 'error-message',
      attr: {
        class: 'form__content',
      },
    }),
    new FormSection('div', {
      for: 'newPassword',
      input: input2,
      description: 'Новый пароль',
      SpanID: 'newPasswordError',
      class: 'error-message',
      attr: {
        class: 'form__content',
      },
    }),
    new FormSection('div', {
      for: 'repeatPassword',
      input: input3,
      description: 'Повторите новый пароль',
      SpanID: 'repeatPasswordError',
      class: 'error-message',
      attr: {
        class: 'form__content',
      },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
    blur: CheckOldPassword,
    blur2: CheckNewPassword,
    blur3: CheckRepeatPassword,
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

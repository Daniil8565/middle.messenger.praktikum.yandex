import FormSection from "../../components/formSection/index.ts";
import IndexChangeData from "./IndexChahgeData/index.ts";
import Button from "../../components/button/index.ts";
import "./style.sass";
import Form from "../../components/form/index.ts";
import Input from "../../components/input/index.ts";
import Error from "../../components/Error/index.ts";
import CheckEmail from "../../utils/CheckingData/CheckEmail/index.ts";
import { CheckLogin } from "../../utils/CheckingData/CheckLogin/index.ts";
import CheckName from "../../utils/CheckingData/CheckName/index.ts";
import CheckSurname from "../../utils/CheckingData/CheckSurname/index.ts";
import CheckPhone from "../../utils/CheckingData/CheckPhone/index.ts";
import CheckNameChat from "../../utils/CheckingData/CheckNameChat/index.ts";
import CheckChangeData from "../../utils/CheckingData/CheckChangeData/index.ts";
let ChangeData: IndexChangeData;
import avatarChangeData from "../../components/avatarChangeData/index.ts";
import TextDisplay from "../../utils/TextDisplay/index.ts";
import modal from "../../components/modal/index.ts";
import ModalShow from "../../utils/ModalShow/index.ts";

const avatar = new avatarChangeData("div", {
  attr: {
    class: "avatarChangeData",
  },
  events: {
    mouseover: TextDisplay,
    click: ModalShow,
  },
});

const button = new Button("button", {
  title: "Сохранить",
  attr: {
    class: "button",
    type: "submit",
  },
});

const input = new Input("input", {
  attr: {
    class: "input",
    type: "email",
    id: "email",
    name: "email",
  },
  events: {
    blur: CheckEmail,
  },
});

const input2 = new Input("input", {
  attr: {
    class: "input",
    type: "text",
    id: "login",
    name: "login",
  },
  events: {
    blur: CheckLogin,
  },
});

const input3 = new Input("input", {
  attr: {
    class: "input",
    type: "text",
    id: "first_name",
    name: "first_name",
  },
  events: {
    blur: CheckName,
  },
});

const input4 = new Input("input", {
  attr: {
    class: "input",
    type: "text",
    id: "second_name",
    name: "second_name",
  },
  events: {
    blur: CheckSurname,
  },
});

const input5 = new Input("input", {
  attr: {
    class: "input",
    type: "text",
    id: "display_name",
    name: "display_name",
  },
  events: {
    blur: CheckNameChat,
  },
});

const input6 = new Input("input", {
  attr: {
    class: "input",
    type: "tel",
    id: "phone",
    name: "phone",
  },
  events: {
    blur: CheckPhone,
  },
});

const forma = new Form("form", {
  items: [
    new FormSection("div", {
      for: "email",
      input: input,
      description: "Почта",
      attr: {
        class: "form__content",
      },
      class: "error__ChangeData",
      SpanID: "emailError",
    }),
    new FormSection("div", {
      for: "login",
      input: input2,
      description: "Логин",
      class: "error__ChangeData",
      attr: {
        class: "form__content",
      },
      SpanID: "loginError",
    }),
    new FormSection("div", {
      for: "first_name",
      input: input3,
      description: "Имя",
      class: "error__ChangeData",
      attr: {
        class: "form__content",
      },
      SpanID: "firstNameError",
    }),
    new FormSection("div", {
      for: "second_name",
      input: input4,
      description: "Фамилия",
      class: "error__ChangeData",
      attr: {
        class: "form__content",
      },
      SpanID: "secondNameError",
    }),
    new FormSection("div", {
      for: "display_name",
      input: input5,
      description: "Имя в чате",
      class: "error__ChangeData",
      attr: {
        class: "form__content",
      },
      SpanID: "Name__chat",
    }),
    new FormSection("div", {
      for: "tel",
      input: input6,
      description: "Телефон",
      class: "error__ChangeData",
      attr: {
        class: "form__content",
      },
      SpanID: "phoneError",
    }),
    new Error("span", {
      attr: {
        class: "ErrorRequest",
        id: "ErrorRequest",
      },
    }),
  ],
  button: button,
  events: {
    submit: CheckChangeData,
  },
  attr: {
    class: "form",
    id: "Form",
  },
});

const Modal = new modal("div", {
  header: "Загрузите файл",
  description: "Выбрать файл на компьютере",
  button_description: "Поменять",
  buttonClose__description: "Закрыть",
  attr: {
    class: "modal",
    id: "uploadModal",
  },
});

ChangeData = new IndexChangeData("div", {
  avatar: avatar,
  form: forma,
  modal: Modal,
  attr: {
    class: "container",
  },
});

export default ChangeData;

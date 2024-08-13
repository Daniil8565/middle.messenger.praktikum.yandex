import Button from "../../components/button/index.ts";
import IndexRegistration from "./IndexRegistration/index.ts";
import Error from "../../components/Error/index.ts";
import Link from "../../components/link/index.ts";
import Form from "../../components/form/index.ts";
import Label from "../../components/label/index.ts";
import Input from "../../components/input/index.ts";
import DataCollection from "../../utils/DataCollection/index.ts";
import "./style.sass";
import CheckEmail from "../../utils/CheckingData/CheckEmail/index.ts";
import CheckLogin from "../../utils/CheckingData/CheckLogin/index.ts";
import CheckName from "../../utils/CheckingData/CheckName/index.ts";
import CheckSurname from "../../utils/CheckingData/CheckSurname/index.ts";
import CheckPhone from "../../utils/CheckingData/CheckPhone/index.ts";
import CheckOldPassword from "../../utils/CheckingData/CheckOldPassword/index.ts";
import CheckRepeatPassword from "../../utils/CheckingData/CheckRepeatPassword/index.ts";

const button = new Button("button", {
  title: "Зарегестрироваться",
  attr: {
    class: "registration__button",
  },
});

const link = new Link("a", {
  attr: {
    href: "../index.html",
    class: "entrance__link",
  },
  title: "Войти",
});

const forma = new Form("form", {
  items: [
    new Label("label", {
      description: "Почта",
      attr: {
        class: "labelRegistration",
        for: "email",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "email",
        id: "email",
        name: "email",
      },
      events: {
        blur: CheckEmail,
      },
    }),
    new Error("span", {
      attr: { id: "emailError", class: "error-message" },
    }),
    new Label("label", {
      description: "Логин",
      attr: {
        class: "labelRegistration",
        for: "login",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "text",
        id: "login",
        name: "login",
      },
      events: {
        blur: CheckLogin,
      },
    }),
    new Error("span", {
      attr: { id: "loginError", class: "error-message" },
    }),
    new Label("label", {
      description: "Имя",
      attr: {
        class: "labelRegistration",
        for: "first_name",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "text",
        id: "first_name",
        name: "first_name",
      },
      events: {
        blur: CheckName,
      },
    }),
    new Error("span", {
      attr: { id: "firstNameError", class: "error-message" },
    }),
    new Label("label", {
      description: "Фамилия",
      attr: {
        class: "labelRegistration",
        for: "second_name",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "text",
        id: "second_name",
        name: "second_name",
      },
      events: {
        blur: CheckSurname,
      },
    }),
    new Error("span", {
      attr: { id: "secondNameError", class: "error-message" },
    }),
    new Label("label", {
      description: "Телефон",
      attr: {
        class: "labelRegistration",
        for: "phone",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "tel",
        id: "phone",
        name: "phone",
      },
      events: {
        blur: CheckPhone,
      },
    }),
    new Error("span", {
      attr: { id: "phoneError", class: "error-message" },
    }),
    new Label("label", {
      description: "Пароль",
      attr: {
        class: "labelRegistration",
        for: "password",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "password",
        id: "oldPassword",
        name: "password",
      },
      events: {
        blur: CheckOldPassword,
      },
    }),
    new Error("span", {
      attr: { id: "oldPasswordError", class: "error-message" },
    }),
    new Label("label", {
      description: "Пароль(ещё раз)",
      attr: {
        class: "labelRegistration",
        for: "PasswordRepeat",
      },
    }),
    new Input("input", {
      attr: {
        class: "entrance__input",
        type: "password",
        id: "repeatPassword",
        name: "password",
      },
      events: {
        blur: CheckRepeatPassword,
      },
    }),
    new Error("span", {
      attr: { id: "repeatPasswordError", class: "error-message" },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
    blurPassword: CheckOldPassword,
    blurPhone: CheckPhone,
    blurSurname: CheckSurname,
    blurName: CheckName,
    blurLogin: CheckLogin,
    blurEmail: CheckEmail,
    blurRepeatPassword: CheckRepeatPassword,
  },
  attr: {
    class: "registration__form",
    id: "Form",
  },
});

const registration = new IndexRegistration("div", {
  title: "Регистрация",
  form: forma,
  link: link,
  attr: {
    class: "container",
  },
});

export default registration;

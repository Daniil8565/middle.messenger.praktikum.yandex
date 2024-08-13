import Button from "../../components/button/index.ts";
import IndexEntrance from "./IndexEntrance/index.ts";
import Link from "../../components/link/index.ts";
import DataCollection from "../../utils/DataCollection/index.ts";
import Form from "../../components/form/index.ts";
import Label from "../../components/label/index.ts";
import Input from "../../components/input/index.ts";
import Error from "../../components/Error/index.ts";
// import page from "../404/index.ts";
import handleLinkClick from "../../utils/handleClick/index.ts";
import "./style.sass";
import CheckLogin from "../../utils/CheckingData/CheckLogin/index.ts";
import CheckOldPassword from "../../utils/CheckingData/CheckOldPassword/index.ts";
// import { handleLinkClick } from "../../index.ts";
// import router from "../../index.ts";
// import router from "../../utils/Router/Router.ts";

// import registration from "../registration/index.ts";
// import used from "../../index.ts";
// import page from "../404/index.ts";
// import router from "../../index.ts";

const button = new Button("button", {
  title: "Авторизоваться",
  attr: {
    class: "entrance__button",
  },
});

const link = new Link("a", {
  attr: {
    href: "/registration",
    class: "entrance__link",
  },
  title: "Нет аккаунта?",
  events: {
    click: handleLinkClick,
  },
});

const forma = new Form("form", {
  items: [
    new Label("label", {
      description: "Логин",
      attr: {
        class: "labelEntrance",
        for: "text",
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
      attr: {
        class: "error-message",
        id: "loginError",
      },
    }),
    new Label("label", {
      description: "Пароль",
      attr: {
        class: "labelEntrance",
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
      attr: {
        class: "error-message",
        id: "oldPasswordError",
      },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
    blurPassword: CheckOldPassword,
  },
  attr: {
    class: "entrance__form",
    id: "Form",
  },
});

const Entrance = new IndexEntrance("div", {
  title: "Вход",
  form: forma,
  link: link,
  attr: {
    class: "container",
  },
});

export default Entrance;

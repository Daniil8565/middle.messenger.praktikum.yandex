import IndexMessage from "./IndexMessage/index.ts";
import ItemMessage from "../../components/itemMessage/index.ts";
import Form from "../../components/form/index.ts";
import Error from "../../components/Error/index.ts";
import Input from "../../components/input/index.ts";
import Button from "../../components/button/index.ts";
import DataCollection from "../../utils/DataCollection/index.ts";
import "./style.sass";
import CheckMessage from "../../utils/CheckingData/CheckMessage/index.ts";
// import LinkMessage from "../../components/linkMessage/index.ts";
import handleLinkClick from "../../utils/handleClick/index.ts";
import Link from "../../components/link/index.ts";

let message: IndexMessage;

let item = new ItemMessage("li", {
  header: "Андрей",
  description: "Изображение",
  time: "10:49",
  attr: {
    class: "list__item",
  },
});

let link = new Link("a", {
  attr: {
    href: "/Profile",
    class: "mes__link",
  },
  title: "Профиль",
  events: {
    click: handleLinkClick,
  },
});

// let link2 = new LinkMessage("a", {
//   attr: {
//     href: "/Profile",
//     class: "mes__link",
//   },
//   title: "Профиль",
//   events: {
//     click: handleLinkClick,
//   },
// });

let button = new Button("button", {
  attr: {
    class: "button__message",
    type: "submit",
  },
});

const forma = new Form("form", {
  items: [
    new Input("input", {
      title: "",
      attr: {
        class: "input__message",
        type: "text",
        placeholder: "Сообщение",
        name: "message",
        id: "message",
      },
      events: {
        blur: CheckMessage,
      },
    }),
    new Error("span", {
      attr: { id: "messageError", class: "error-message" },
    }),
  ],
  button: button,
  events: {
    submit: DataCollection,
    blur: CheckMessage,
  },
  attr: {
    class: "form__message",
    id: "Form",
  },
});

message = new IndexMessage("div", {
  link: link,
  item: item,
  form: forma,
  attr: {
    class: "con",
  },
});

export default message;

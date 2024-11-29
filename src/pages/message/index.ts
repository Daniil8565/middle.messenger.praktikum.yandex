import IndexMessage from "./IndexMessage/index.ts";
import ItemMessage from "../../components/itemMessage/index.ts";
import Form from "../../components/form/index.ts";
import Error from "../../components/Error/index.ts";
import Input from "../../components/input/index.ts";
import Button from "../../components/button/index.ts";
import DataCollection from "../../utils/DataCollection/index.ts";
import "./style.sass";
import CheckMessage from "../../utils/CheckingData/CheckMessage/index.ts";
import handleLinkClick from "../../utils/handleClick/index.ts";
import Link from "../../components/link/index.ts";
import messageHeader from "../../components/message__header/index.ts";
import ClickButtonHeader from "../../utils/MessageClickButton/index.ts";
import modalMessage from "../../components/modalMessage/index.ts";
import ContainerLink from "../../components/ContainerMessageLink/index.ts";
import ModalAdd from "../../utils/modalAdd/index.ts";
import ModalDelete from "../../utils/ModalDelete/index.ts";
import DataInput from "../../utils/DataInput/index.ts";
import DataDelete from "../../utils/DataDelete/index.ts";
import connect from "../../utils/API/HOC/index.ts";

let message: IndexMessage;

let linkAdd = new Link("div", {
  title: "Добавить пользователя",
  attr: {
    href: "#",
    id: "add-user",
    class: "menu-item",
  },
  events: {
    click: ModalAdd,
  },
});

let linkDelete = new Link("div", {
  title: "Удалить пользователя",
  attr: {
    href: "#",
    id: "remove-user",
    class: "menu-item",
  },
  events: {
    click: ModalDelete,
  },
});

let ContLink = new ContainerLink("div", {
  link1: linkAdd,
  link2: linkDelete,
  attr: {
    class: "dropdown-menu hidden",
    id: "dropdown-menu",
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

let buttonHeader = new Button("button", {
  title: "⋮",
  attr: {
    class: "menu-icon",
    id: "menu-icon",
  },
  events: {
    click: ClickButtonHeader,
  },
});

let header = new messageHeader("div", {
  Button: buttonHeader,
  Link: ContLink,
  attr: {
    class: "content__header",
  },
});

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

let modalAdd = new modalMessage("div", {
  Header: "Добавить пользователя",
  description: "Имя пользователя",
  for: "username",
  id: "username",
  name: "title",
  buttonDescription: "Добавить",
  attr: {
    class: "modalMessage hidden",
    id: "add-user-modal",
  },
  events: {
    submit: DataInput,
  },
});

let modalDelete = new modalMessage("div", {
  Header: "Удалить пользователя",
  description: "Введите id пользователя",
  for: "username-remove",
  id: "username-remove",
  name: "username-remove",
  buttonDescription: "Удалить",
  attr: {
    class: "modalMessage hidden",
    id: "remove-user-modal",
  },
  events: {
    submit: DataDelete,
  },
});

type ChatItem = Record<string, unknown>;

let newIndexMessage = connect((state) => {
  if (Array.isArray(state.user)) {
    const chatList = state.user as ChatItem[];
    const newItems = chatList.map((chat) => new ItemMessage("li", chat));
    return { items: newItems };
  }
  return { items: "Ошибка" };
})(IndexMessage);

message = new newIndexMessage("div", {
  link: link,
  Header: header,
  form: forma,
  ModalADD: modalAdd,
  ModalDELETE: modalDelete,
  attr: {
    class: "con",
  },
});

export default message;

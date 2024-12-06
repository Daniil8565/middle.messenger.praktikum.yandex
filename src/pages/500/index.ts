import Header from "../../components/Header/index.ts";
import description from "../../components/description/index.ts";
import Link from "../../components/link/index.ts";
import handleLinkClick from "../../utils/handleClick/index.ts";
import Index500 from "./Index500/index.ts";
import "../404/404.sass";

let index500: Index500;

const h1 = new Header("h1", {
  title: "500",
  attr: {
    class: "header",
  },
});

const data = new description("p", {
  title: "Мы уже фиксим",
  attr: {
    class: "descriptionError",
  },
});

const link = new Link("a", {
  attr: {
    href: "/message",
    class: "linkExit",
  },
  title: "Назад к чатам",
  events: {
    click: handleLinkClick,
  },
});

index500 = new Index500("div", {
  H1: h1,
  description: data,
  Link: link,
  attr: {
    class: "container",
  },
});

export default index500;

import Header from "../../components/Header/index.ts";
import description from "../../components/description/index.ts";
import Link from "../../components/link/index.ts";
import Index404 from "./Index404/index.ts";
import "./404.sass";
import handleLinkClick from "../../utils/handleClick/index.ts";

const h1 = new Header("h1", {
  title: "404",
  attr: {
    class: "header",
  },
});

const data = new description("p", {
  title: "Не туда попали",
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

const page = new Index404("div", {
  H1: h1,
  description: data,
  Link: link,
  attr: {
    class: "container",
  },
});

export default page;

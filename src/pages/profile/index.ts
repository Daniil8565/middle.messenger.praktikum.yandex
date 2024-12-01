import IndexProfile from "./IndexProfile/index.ts";
import Link from "../../components/link/index.ts";
import "./style.sass";
import handleLinkClick from "../../utils/handleClick/index.ts";
import mapUserToProps from "../../utils/API/mapUserToProps/index.ts";
import connect from "../../utils/API/HOC/index.ts";
import GlobalProfileData from "../../components/GlobalProfileData/index.ts";

let Profile: IndexProfile;

let newGlobalProfileData = connect(mapUserToProps)(GlobalProfileData);

const GlProfileData = new newGlobalProfileData("div", {
  avatar: "",
  labelEmail: "Почта",
  email: "",
  labelLogin: "Логин",
  login: "",
  labelFirstName: "Имя",
  first_name: "",
  labelSecondName: "Фамилия",
  second_name: "",
  labelDisplayName: "Имя в чате",
  display_name: "",
  labelPhone: "Телефон",
  phone: "",
  attr: {
    class: "container__data",
  },
});

const link1 = new Link("a", {
  attr: {
    href: "/ChangeData",
    class: "link",
  },
  title: "Изменить данные",
  events: {
    click: handleLinkClick,
  },
});

const link2 = new Link("a", {
  attr: {
    href: "/ChangePassword",
    class: "link",
  },
  title: "Изменить пароль",
  events: {
    click: handleLinkClick,
  },
});

const exit = new Link("a", {
  attr: {
    href: "/",
    class: "exit",
  },
  title: "Выйти",
  events: {
    click: handleLinkClick,
  },
});

// let newIndexProfile = connect(mapUserToProps)(IndexProfile);

Profile = new IndexProfile("div", {
  GlobalProfileData: GlProfileData,
  link1: link1,
  link2: link2,
  exit: exit,
  attr: {
    class: "container",
  },
});

export default Profile;

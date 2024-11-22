import Avatar from "../../components/avatar/index.ts";
import IndexProfile from "./IndexProfile/index.ts";
import Link from "../../components/link/index.ts";
import "./style.sass";
import handleLinkClick from "../../utils/handleClick/index.ts";
import mapUserToProps from "../../utils/API/mapUserToProps/index.ts";
import connect from "../../utils/API/HOC/index.ts";
import GlobalProfileData from "../../components/GlobalProfileData/index.ts";

let Profile: IndexProfile;

const avatar = new Avatar("div", {
  attr: { class: "avatar" },
});

let newGlobalProfileData = connect(mapUserToProps)(GlobalProfileData);

const GlProfileData = new newGlobalProfileData("div", {
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

let newIndexProfile = connect(mapUserToProps)(IndexProfile);

Profile = new newIndexProfile("div", {
  avatar: avatar,
  name: "Иван",
  GlobalProfileData: GlProfileData,
  link1: link1,
  link2: link2,
  exit: exit,
  attr: {
    class: "container",
  },
});

export default Profile;

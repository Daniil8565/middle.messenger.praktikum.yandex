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

// let newProfileData = connect(mapUserToProps)(ProfileData);

// const profileData1 = new ProfileData("div", {
//   label: "Почта",
//   email: "",
//   attr: {
//     class: "section",
//   },
// });

// const profileData2 = new ProfileData("div", {
//   label: "Логин",
//   login: "",
//   attr: {
//     class: "section",
//   },
// });

// const profileData3 = new ProfileData("div", {
//   label: "Имя",
//   description: "Иван",
//   attr: {
//     class: "section",
//   },
// });

// const profileData4 = new ProfileData("div", {
//   label: "Фамилия",
//   description: "Иванов",
//   attr: {
//     class: "section",
//   },
// });

// const profileData5 = new ProfileData("div", {
//   label: "Имя в чате",
//   description: "Иван",
//   attr: {
//     class: "section",
//   },
// });

// const profileData6 = new ProfileData("div", {
//   label: "Телефон",
//   description: "+7(909) 967 30 30",
//   attr: {
//     class: "section",
//   },
// });

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

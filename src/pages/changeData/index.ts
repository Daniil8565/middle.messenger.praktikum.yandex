import IndexChangeData from "./IndexChahgeData/index.ts";
import Button from "../../components/button/index.ts";
import "./style.sass";
import Input from "../../components/input/index.ts";
import CheckEmail from "../../utils/CheckingData/CheckEmail/index.ts";
import CheckLogin from "../../utils/CheckingData/CheckLogin/index.ts";
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
import connect from "../../utils/API/HOC/index.ts";
import FormChangeData from "../../components/formChangeData/index.ts";

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

let newFormChangeData = connect((state) => {
  const dataUser = state.userName;
  let newObj: Record<string, unknown> = {};
  let resultInput: Record<string, Input> = {};
  if (dataUser) {
    for (let i in dataUser) {
      if (i != "id" && i != "avatar") {
        newObj[i] = dataUser[i];
      }
    }
  }

  for (let i in newObj) {
    if (i == "email") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "email",
          id: "email",
          name: "email",
          value: newObj[i],
        },
        events: {
          blur: CheckEmail,
        },
      });
      resultInput[i] = input;
    } else if (i == "phone") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "tel",
          id: "phone",
          name: "phone",
          value: newObj[i],
        },
        events: {
          blur: CheckPhone,
        },
      });
      resultInput[i] = input;
    } else if (i == "display_name") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "text",
          id: "display_name",
          name: "display_name",
          value: newObj[i],
        },
        events: {
          blur: CheckNameChat,
        },
      });
      resultInput[i] = input;
    } else if (i == "first_name") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "text",
          id: "first_name",
          name: "first_name",
          value: newObj[i],
        },
        events: {
          blur: CheckName,
        },
      });
      resultInput[i] = input;
    } else if (i == "second_name") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "text",
          id: "second_name",
          name: "second_name",
          value: newObj[i],
        },
        events: {
          blur: CheckSurname,
        },
      });
      resultInput[i] = input;
    } else if (i == "login") {
      let input = new Input("input", {
        attr: {
          class: "input",
          type: "text",
          id: "login",
          name: "login",
          value: newObj[i],
        },
        events: {
          blur: CheckLogin,
        },
      });
      resultInput[i] = input;
    }
  }
  let objInput: Record<string, Input> = {};
  for (let i in resultInput) {
    if (i == "login") {
      objInput["input3"] = resultInput[i];
    } else if (i == "second_name") {
      objInput["input1"] = resultInput[i];
    } else if (i == "first_name") {
      objInput["input0"] = resultInput[i];
    } else if (i == "display_name") {
      objInput["input2"] = resultInput[i];
    } else if (i == "phone") {
      objInput["input5"] = resultInput[i];
    } else if (i == "email") {
      objInput["input4"] = resultInput[i];
    }
  }
  return objInput;
})(FormChangeData);

const forma = new newFormChangeData("form", {
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

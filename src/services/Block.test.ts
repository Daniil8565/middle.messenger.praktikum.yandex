import { expect } from "chai";
import Block from "./Block.ts";

class Entrance extends Block {
  constructor() {
    super("div", {
      attr: {
        class: "Entrance",
      },
      description: "Entrance",
    });
  }
  render() {
    return this.compile(`<span>{{{description}}}</span>`);
  }
}
class Registration extends Block {
  constructor() {
    super("div", {
      attr: {
        class: "Registration",
      },
      description: "Entrance",
    });
  }
  render() {
    return this.compile(`<span>{{{description}}}</span>`);
  }
}
class Messenger extends Block {
  constructor() {
    super("div", {
      attr: {
        class: "Messenger",
      },
      description: "Messenger",
    });
  }
  render() {
    return this.compile(`<span>{{{description}}}</span>`);
  }
}
class Profile extends Block {
  constructor() {
    super("div", {
      attr: {
        class: "Profile",
      },
      description: "Entrance",
    });
  }
  render() {
    return this.compile(`<span>{{{description}}}</span>`);
  }
}

export let entrance: Block;
export let registration: Block;
export let messenger: Block;
export let profile: Block;
describe("Block", () => {
  entrance = new Entrance();
  registration = new Registration();
  messenger = new Messenger();
  profile = new Profile();

  it("Проверяем контент при объявлении компонента", () => {
    expect(entrance.getContent()?.innerHTML, "<span>Entrance</span>");
    expect(registration.getContent()?.innerHTML, "<span>Registration</span>");
    expect(messenger.getContent()?.innerHTML, "<span>Messenger</span>");
    expect(profile.getContent()?.innerHTML, "<span>Profile</span>");
  });

  it("Проверяем класс при объявлении компонента", () => {
    expect(entrance.getContent()?.className, "login-page");
    expect(registration.getContent()?.className, "signup-page");
    expect(messenger.getContent()?.className, "chat-page");
    expect(profile.getContent()?.className, "profile-page");
  });

  it("Проверяем DOM элемент при объявлении компонента", () => {
    expect(entrance.getContent()?.nodeName.toLowerCase(), "div");
    expect(registration.getContent()?.nodeName.toLowerCase(), "div");
    expect(messenger.getContent()?.nodeName.toLowerCase(), "div");
    expect(profile.getContent()?.nodeName.toLowerCase(), "div");
  });

  it("Проверяем изменение контента при вызове метода setProps", () => {
    entrance.setProps({ description: "New Entrance" });
    registration.setProps({ description: "New Registration" });
    messenger.setProps({ description: "New Messenger" });
    profile.setProps({ description: "New Profile" });

    expect(entrance.getContent()?.innerHTML, "<span>New Entrance</span>");
    expect(
      registration.getContent()?.innerHTML,
      "<span>New Registration</span>"
    );
    expect(messenger.getContent()?.innerHTML, "<span>New Messenger</span>");
    expect(profile.getContent()?.innerHTML, "<span>New Profile</span>");
  });
});

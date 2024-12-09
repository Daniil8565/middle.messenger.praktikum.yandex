import { expect } from "chai";
import Component from "./Block.ts";

class LoginPage extends Component {
  constructor() {
    super("div", {
      attr: {
        class: "login-page",
      },
      content: "LoginPage",
    });
  }
  render() {
    return this.compile(`<span>{{{content}}}</span>`);
  }
}
class SignupPage extends Component {
  constructor() {
    super("div", {
      attr: {
        class: "login-page",
      },
      content: "LoginPage",
    });
  }
  render() {
    return this.compile(`<span>{{{content}}}</span>`);
  }
}
class ChatPage extends Component {
  constructor() {
    super("div", {
      attr: {
        class: "chat-page",
      },
      content: "ChatPage",
    });
  }
  render() {
    return this.compile(`<span>{{{content}}}</span>`);
  }
}
class ProfilePage extends Component {
  constructor() {
    super("div", {
      attr: {
        class: "login-page",
      },
      content: "LoginPage",
    });
  }
  render() {
    return this.compile(`<span>{{{content}}}</span>`);
  }
}

export let loginPage: Component;
export let signupPage: Component;
export let chatPage: Component;
export let profilePage: Component;
describe("Component", () => {
  loginPage = new LoginPage();
  signupPage = new SignupPage();
  chatPage = new ChatPage();
  profilePage = new ProfilePage();

  it("should have current content", () => {
    expect(loginPage.getContent()?.innerHTML, "<span>LoginPage</span>");
    expect(signupPage.getContent()?.innerHTML, "<span>SignupPage</span>");
    expect(chatPage.getContent()?.innerHTML, "<span>ChatPage</span>");
    expect(profilePage.getContent()?.innerHTML, "<span>ProfilePage</span>");
  });

  it("should have current className", () => {
    expect(loginPage.getContent()?.className, "login-page");
    expect(signupPage.getContent()?.className, "signup-page");
    expect(chatPage.getContent()?.className, "chat-page");
    expect(profilePage.getContent()?.className, "profile-page");
  });

  it("should have current nodeName", () => {
    expect(loginPage.getContent()?.nodeName.toLowerCase(), "div");
    expect(signupPage.getContent()?.nodeName.toLowerCase(), "div");
    expect(chatPage.getContent()?.nodeName.toLowerCase(), "div");
    expect(profilePage.getContent()?.nodeName.toLowerCase(), "div");
  });

  it("should have new props after setProps", () => {
    loginPage.setProps({ content: "New LoginPage" });
    signupPage.setProps({ content: "New SignupPage" });
    chatPage.setProps({ content: "New ChatPage" });
    profilePage.setProps({ content: "New ProfilePage" });

    expect(loginPage.getContent()?.innerHTML, "<span>New LoginPage</span>");
    expect(signupPage.getContent()?.innerHTML, "<span>New SignupPage</span>");
    expect(chatPage.getContent()?.innerHTML, "<span>New ChatPage</span>");
    expect(profilePage.getContent()?.innerHTML, "<span>New ProfilePage</span>");
  });
});

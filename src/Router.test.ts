import { expect } from "chai";
import { Router } from "./index.ts";
import {
  entrance,
  registration,
  messenger,
  profile,
} from "./services/Block.test.ts";

if (typeof global.structuredClone !== "function") {
  global.structuredClone = require("structured-clone");
}

describe("Router", () => {
  const router = new Router("#app");

  before(() => {
    router
      .use("/", entrance)
      .use("/sign-up", registration)
      .use("/messenger", messenger)
      .use("/settings", profile)
      .start();
  });

  it("Проверка на создание одного экземпляра класса", () => {
    const router1 = new Router("#app");
    const router2 = new Router("#app");
    expect(router1).to.equal(router2);
  });

  it("Проверка изменении истории", () => {
    window.history.pushState({ page: "login" }, "EntrancePage", "/");
    window.history.pushState(
      { page: "register" },
      "RegistrationPage",
      "/sign-up"
    );
    window.history.pushState(
      { page: "messenger" },
      "MessengerPage",
      "/messenger"
    );
    window.history.pushState({ page: "settings" }, "ProfilePage", "/settings");

    expect(window.history.length).to.eq(5);
  });
});

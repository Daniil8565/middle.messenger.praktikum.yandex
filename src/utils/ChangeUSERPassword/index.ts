import Profile from "../../pages/profile/index.ts";
import ChangePassword from "../../pages/changePassword/index.ts";
import render from "../render.ts";

export default function ChangeUSERPassword(events: MouseEvent) {
  events.preventDefault();
  history.replaceState({ page: "change-password" }, "Профиль", "");
  console.log("Click LinkChangePassword");
  Profile.remove();
  ChangePassword.flex();
  render(".app", ChangePassword);
}

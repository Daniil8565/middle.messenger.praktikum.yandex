import Profile from "../../pages/profile";
import ChangePassword from "../../pages/changePassword";
import render from "../render";

export default function ChangeUSERPassword(events: MouseEvent) {
  events.preventDefault();
  history.replaceState({ page: "change-password" }, "Профиль", "");
  console.log("Click LinkChangePassword");
  Profile.remove();
  ChangePassword.flex();
  render(".app", ChangePassword);
}

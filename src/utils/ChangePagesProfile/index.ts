import ChangeData from "../../pages/changeData";
import Profile from "../../pages/profile";
import render from "../render";

export default function ChangeUSERData(events: MouseEvent) {
  events.preventDefault();
  history.replaceState({ page: "change-data" }, "Профиль", "");
  console.log("Click LinkChangeData");
  Profile.remove();
  console.log(ChangeData);
  ChangeData.flex();
  render(".app", ChangeData);
}

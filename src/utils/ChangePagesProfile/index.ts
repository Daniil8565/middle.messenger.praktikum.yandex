import ChangeData from "../../pages/changeData/index.ts";
import Profile from "../../pages/profile/index.ts";
import render from "../render.ts";

export default function ChangeUSERData(events: MouseEvent) {
  events.preventDefault();
  history.replaceState({ page: "change-data" }, "Профиль", "");
  console.log("Click LinkChangeData");
  Profile.remove();
  console.log(ChangeData);
  ChangeData.flex();
  render(".app", ChangeData);
}

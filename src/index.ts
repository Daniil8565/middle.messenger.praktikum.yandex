import ChangePassword from "./pages/changePassword/index.ts";

import page from "./pages/404/index.ts";
import Profile from "./pages/profile/index.ts";
import registration from "./pages/registration/index.ts";
import message from "./pages/message/index.ts";
import Router from "./utils/Router/Router.ts";
// import Entrance from "./pages/entrance";
// import render from "./utils/render";
import "./normalize.sass";
import "./style.sass";
import index500 from "./pages/500/index.ts";
import ChangeData from "./pages/changeData/index.ts";
import Entrance from "./pages/entrance/index.ts";

const router = new Router(".app");
router
  .use("/404", page)
  .use("/main", Entrance)
  .use("/500", index500)
  .use("/ChangeData", ChangeData)
  .use("/ChangePassword", ChangePassword)
  .use("/message", message)
  .use("/Profile", Profile)
  .use("/registration", registration);

router.go("/main");

export default router;

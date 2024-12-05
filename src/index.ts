// import page from "./pages/404/index.ts";
import Entrance from "./pages/entrance/index.ts";
// import index500 from "./pages/500/index.ts";
// import ChangeData from "./pages/changeData/index.ts";
// import ChangePassword from "./pages/changePassword/index.ts";
import FlagAuthorization from "./utils/FlagAuthorization/index.ts";
import ChangeData from "./pages/changeData/index.ts";
import message from "./pages/message/index.ts";
import Profile from "./pages/profile/index.ts";
import registration from "./pages/registration/index.ts";
import Route from "./utils/Router/Route.ts";
import IBlock from "./services/IBlock.ts";
import "./style.sass";
import ChangePassword from "./pages/changePassword/index.ts";

class Router {
  private static __instance: Router | null = null;
  private routes: Route[] = [];
  private history;
  private _currentRoute: Route | null = null;
  private _rootQuery;

  constructor(rootQuery: string) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;

    Router.__instance = this;
  }

  use(pathname: string, Block: IBlock): Router {
    if (this._rootQuery) {
      const route = new Route(pathname, Block, {
        rootQuery: this._rootQuery,
      });
      this.routes.push(route);
    }
    return this;
  }

  start(): void {
    window.onpopstate = (event) => {
      console.log("event.state", event.state);
      console.log(window.location.pathname);
      if (!FlagAuthorization.flag) {
        this._onRoute("/");
      } else {
        if (event.state?.pages == "/messenger") {
          ChangeData.remove();
          ChangePassword.remove();
          message.flex();
        }
        this._onRoute(window.location.pathname);
      }
    };

    this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string): void {
    console.log(this.history);
    const route = this.getRoute(pathname);
    if (!route) {
      return;
    }

    if (this._currentRoute && this._currentRoute !== route) {
      this._currentRoute.leave();
    }
    this._currentRoute = route;
    route.render();
  }

  go(pathname: string): void {
    this.history?.pushState({ pages: pathname }, "", pathname);
    this._onRoute(pathname);
  }

  back(): void {
    if (this.history) this.history.back();
  }

  forward(): void {
    if (this.history) this.history.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }
}

const router = new Router(".app");
router
  // .use("/404", page)
  // .use("/500", index500)
  // .use("/ChangeData", ChangeData)
  // .use("/ChangePassword", ChangePassword)
  .use("/messenger", message)
  .use("/sign-up", registration)
  .use("/settings", Profile)
  .use("/", Entrance)
  .start();

// router.go("/");

export default router;

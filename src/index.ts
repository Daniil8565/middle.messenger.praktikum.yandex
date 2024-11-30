import page from "./pages/404/index.ts";
import Entrance from "./pages/entrance/index.ts";
import index500 from "./pages/500/index.ts";
import ChangeData from "./pages/changeData/index.ts";
import ChangePassword from "./pages/changePassword/index.ts";
import message from "./pages/message/index.ts";
import Profile from "./pages/profile/index.ts";
import registration from "./pages/registration/index.ts";
import Route from "./utils/Router/Route.ts";
import IBlock from "./services/IBlock.ts";
import "./style.sass";
import UserLoginController from "./utils/API/UserLoginController/index.ts";

// Функция для получения значения cookie
function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : null;
}

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
    // Проверяем авторизацию при загрузке
    const isAuthenticated = getCookie("isAuthenticated");
    if (isAuthenticated === "true") {
      // Если авторизован, перенаправляем на страницу мессенджера
      const controller = new UserLoginController();
      controller.GetChat();
      controller.getData();
      this.go("/message");
    } else {
      // Если не авторизован, перенаправляем на страницу входа
      this.go("/");
    }
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };
    // Сохраняем состояние в localStorage
    window.addEventListener("beforeunload", () => {
      // Сохраняем текущий маршрут
      const currentPath = window.location.pathname;
      localStorage.setItem("currentRoute", currentPath);
    });

    // Загружаем состояние из localStorage
    window.addEventListener("load", () => {
      const storedRoute = localStorage.getItem("currentRoute");
      if (storedRoute && this.history) {
        this.history.replaceState({}, "", storedRoute);
        this._onRoute(storedRoute);
        localStorage.removeItem("currentRoute"); // Удаляем после восстановления
      } else {
        // Если маршрут не сохранен, загружаем по умолчанию
        this._onRoute(window.location.pathname);
      }
    });

    // this._onRoute(window.location.pathname);
  }

  private _onRoute(pathname: string): void {
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
    this.history?.pushState({}, "", pathname);
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
  .use("/404", page)
  .use("/500", index500)
  .use("/ChangeData", ChangeData)
  .use("/ChangePassword", ChangePassword)
  .use("/message", message)
  .use("/registration", registration)
  .use("/", Entrance)
  .use("/Profile", Profile)
  .start();

// router.go("/");

export default router;

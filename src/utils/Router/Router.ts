import Route from "./Route.ts";
import Block from "../../services/Block.ts";
import IBlock from "../../services/IBlock.ts";

export default class Router {
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

  use(pathname: string, indexBlock: IBlock): Router {
    if (this._rootQuery) {
      const route = new Route(pathname, indexBlock, {
        rootQuery: this._rootQuery,
      });
      this.routes.push(route);
    }
    return this;
  }

  start(): void {
    window.onpopstate = () => {
      this._onRoute(window.location.pathname);
    };

    this._onRoute(window.location.pathname);
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
    let tmp: History = this.history as History;
    tmp.pushState({}, "", pathname);
    this._onRoute(pathname);
  }

  back(): void {
    let tmp: History = this.history as History;
    tmp.back();
  }

  forward(): void {
    let tmp: History = this.history as History;
    tmp.forward();
  }

  getRoute(pathname: string): Route | undefined {
    return this.routes.find((route) => route.match(pathname));
  }
  glush() {
    new Block();
  }
}

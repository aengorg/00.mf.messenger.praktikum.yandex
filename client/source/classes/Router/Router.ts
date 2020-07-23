import { Component } from '../Component/Component.js';
import { Route } from '../Route/Route.js';

export class Router {
  currentRoute: Route = null;
  private routes: Route[] = [];
  private history = window.history;
  private defaultPathname: string = '';
  private rootNode: Element;

  use(pathname: string, component: Component) {
    const route = new Route(pathname, component);
    this.routes.push(route);
    return this;
  }

  default(pathname: string, component: Component) {
    this.defaultPathname = pathname;
    this.use(pathname, component);
    return this;
  }

  start = (rootNode: Element) => {
    this.rootNode = rootNode;
    this.rootNode.innerHTML = '';
    window.onpopstate = () => {
      this.handlePathChange(document.location.hash);
    };
    this.handlePathChange(document.location.hash);
  };

  go(pathname) {
    window.location.hash = pathname;
    this.handlePathChange(pathname);
  }

  back() {
    this.history.back();
  }

  forward() {
    this.history.forward();
  }

  getRoute(pathname) {
    return this.routes.find((route) => route.match(pathname));
  }

  private handlePathChange(pathname: string) {
    let route = this.getRoute(pathname);
    if (route == null) {
      this.go(this.defaultPathname);
      return;
    }

    if (route !== this.currentRoute && this.currentRoute != null) {
      this.currentRoute.leave();
    }

    this.currentRoute = route;

    if (route !== null && route !== undefined) {
      route.render(this.rootNode);
    }
  }
}

export const router = new Router();

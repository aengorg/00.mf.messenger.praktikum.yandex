import { Route } from '../Route/Route.js';

type TRoutes = Record<string, any>;

export class HashRouter {
  routes: TRoutes;
  rootQuery: string;

  constructor(rootQuery = '#app') {
    this.routes = {};
    this.rootQuery = rootQuery;
    window.addEventListener('hashchange', this.onRouteChange);
  }

  private onRouteChange() {
    const { hash } = window.location;
    console.log(this.routes);

    Object.entries(this.routes).some(([routeHash, view]) => {
      console.log(routeHash, hash, routeHash === hash);
      if (routeHash === hash) {
        view.mount();
        return true;
      }
    });
  }

  public use(hash: string, view: any): this {
    this.routes[hash] = new Route(view, this.rootQuery);
    return this;
  }

  public go(hash: string): void {
    window.location.hash = hash;
  }

  public back(): void {
    window.history.back();
  }

  public forward(): void {
    window.history.forward();
  }

  public start(): void {
    this.onRouteChange();
  }
}

export const router = new HashRouter();

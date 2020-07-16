class Router {
  constructor(rootQuery) {
    if (Router.__instance) {
      return Router.__instance;
    }

    this.routes = [];
    this.history = window.history;
    this._currentRoute = null;
    this._rootQuery = rootQuery;
    this._rootPathname = '';
    Router.__instance = this;
  }

  use(pathname, block) {
    const route = new Route(pathname, block, { rootQuery: this._rootQuery });
    this.routes.push(route);
    return this;
  }

  start(rootPathname = '/') {
    this._rootPathname = rootPathname;
    window.onpopstate = ((event) => {
      this._onRoute(event.currentTarget.location.pathname);
    }).bind(this);
    this._onRoute(window.location.pathname);
  }

  _onRoute(pathname) {
    let route = this.getRoute(pathname);

    if (this._currentRoute) {
      this._currentRoute.leave();
    }

    this._currentRoute = route;
    route.render(route, pathname);
  }

  go(pathname) {
    this.history.pushState({}, '', pathname);
    this._onRoute(pathname);
  }

  back() {
    history.back();
  }

  forward() {
    history.forward();
  }

  getRoute(pathname) {
    let route = this.routes.find((route) => route.match(pathname));
    if (!route) route = this.getRoute(this._rootPathname);

    return route;
  }
}

// import { Route } from '../Route/Route';

// class Router {
//   routes: any[];
//   history: any;
//   currentRoute: null;
//   rootQuery: string;
//   rootPathname: string;

//   constructor(rootQuery?: string) {
//     this.routes = [];
//     this.history = window.history;
//     this.currentRoute = null;
//     this.rootQuery = rootQuery;
//     this.rootPathname = '';
//   }

//   use(pathname, block) {
//     const route = new Route(pathname, block, { rootQuery: this.rootQuery });
//     this.routes.push(route);
//     return this;
//   }

//   start(rootPathname = '/') {
//     this.rootPathname = rootPathname;
//     window.onpopstate = ((event) => {
//       this.onRoute(event.currentTarget.location.pathname);
//     }).bind(this);
//     this.onRoute(window.location.pathname);
//   }

//   onRoute(pathname) {
//     let route = this.getRoute(pathname);

//     // TODO
//     // if (this.currentRoute !== null) {
//     //   this.currentRoute.leave();
//     // }

//     this.currentRoute = route;
//     route.render(route, pathname);
//   }

//   go(pathname) {
//     this.history.pushState({}, '', pathname);
//     this.onRoute(pathname);
//   }

//   back() {
//     history.back();
//   }

//   forward() {
//     history.forward();
//   }

//   getRoute(pathname) {
//     let route = this.routes.find((route) => route.match(pathname));
//     if (!route) route = this.getRoute(this.rootPathname);

//     return route;
//   }
// }

// export const router = new Router();

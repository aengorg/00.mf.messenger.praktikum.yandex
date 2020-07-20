// export class Route {
//   pathname: any;
//   view: any;
//   props: any;

//   constructor(pathname, view, props: any = {}) {
//     this.pathname = pathname;
//     this.view = view;
//     this.props = props;
//   }

//   match(pathname) {
//     return pathname === this.pathname;
//   }

//   navigate(pathname) {
//     if (this.match(pathname)) {
//       this.pathname = pathname;
//       this.render();
//     }
//   }

//   leave() {
//     if (this.block) {
//       this.block.hide();
//     }
//   }

//   render() {
//     if (!this.block) {
//       this.block = new this.view();
//       // TODO
//       // this.render(this.props.rootQuery, this.block); // моунт
//       return;
//     }

//     this.block.show();
//   }
// }

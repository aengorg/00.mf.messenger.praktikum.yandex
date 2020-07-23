export class Route {
  view: any;
  rootQuery: string;

  constructor(view: any, rootQuery: string) {
    this.view = view;
    this.rootQuery = rootQuery;
  }

  private clear() {
    document.querySelector(this.rootQuery).innerHTML = '';
  }

  public mount() {
    this.clear();
    this.view.mount(this.rootQuery);
  }
}

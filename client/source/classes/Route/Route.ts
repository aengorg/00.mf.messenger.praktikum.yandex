import { Component } from '../Component/Component.js';

export class Route {
  private pathname: string;
  private component: Component;

  constructor(pathname: string, component: Component) {
    this.pathname = pathname;
    this.component = component;
  }

  public leave() {
    this.component.hide();
  }

  public match(pathname) {
    pathname = pathname.replace('#', '');
    return pathname === this.pathname;
  }

  public render(node: Element) {
    this.component.show();
    node.appendChild(this.component.element);
  }
}

import { generationId } from '../../utils/generationId.js';

export class Component {
  id: string;
  el: HTMLElement;
  props: any;
  children: any[];

  constructor(props: any = {}) {
    this.id = generationId();
    this.el = null;
    this.props = props;
    this.children = [];
    this.onInit();
  }

  public insert(el): void {
    el.innerHTML = this.render();
    this.mount();
  }

  public addChildren(component: any): void {
    this.children.push(component);
  }

  public renderTemplate(template, props): string {
    return Handlebars.compile(template)({ ...props, id: this.id });
  }

  public mount(): void {
    this.el = document.querySelector(`[data-key="${this.id}"]`);
    this.children.forEach((component: any) => component.mount());
    this.onMount();
  }

  public remove(): void {
    this.onRemove();
    if (this.el) {
      this.children.forEach((component: any) => component.remove());
      this.el.innerHTML = '';
      this.children = [];
    }
  }

  public update(props): void {
    this.onUpdate();
    this.remove();

    let text = this.render(props).trim();
    const html = document.createElement('div');
    html.innerHTML = text;
    this.el.replaceWith(html.childNodes[0]);

    this.mount();
  }

  public triggerEvent(eventName, detail): void {
    const event = new window.CustomEvent(eventName, { detail });
    this.el.dispatchEvent(event);
  }

  public render(props?: any): any {}

  public onInit(): void {}

  public onMount(): void {}
  public onMounted(): void {}

  public onUpdate(): void {}
  public onUpdated(): void {}

  public onRemove(): void {}
  public onRemoved(): void {}
}

import { generationId } from '../utils/generationId.js';

export class Component {
  constructor(props = {}) {
    this.id = generationId();
    this.el = null;
    this.props = props;
    this.children = [];
    this.onInit();
  }

  insert(el) {
    el.innerHTML = this.render();
    this.mount();
  }

  addChildren(component) {
    this.children.push(component);
  }

  renderTemplate(template, props) {
    return Handlebars.compile(template)({ ...props, id: this.id });
  }

  mount() {
    this.el = document.querySelector(`[data-key="${this.id}"]`);
    this.children.forEach((component) => component.mount());
    this.onMount();
  }

  remove() {
    this.onRemove();
    if (this.el) {
      this.el.innerHTML = '';
      this.children.forEach((component) => component.remove());
      this.children = [];
    }
  }

  update(props) {
    this.onUpdate();
    this.remove();

    let text = this.render(props).trim();
    const html = document.createElement('div');
    html.innerHTML = text;
    this.el.replaceWith(html.childNodes[0]);

    this.mount();
  }

  triggerEvent(eventName, detail) {
    const event = new window.CustomEvent(eventName, { detail });
    this.el.dispatchEvent(event);
  }

  render() {}

  onInit() {}
  onMount() {}
  onUpdate() {}
  onRemove() {}
}

import { EventBus } from '../EventBus/EventBus.js';
import { generationId } from '../../utils/generationId.js';

export class Component {
  public id: string;
  protected props: any;
  private state: any;
  private eventBus: EventBus;
  private _element: HTMLElement;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  constructor(props = {}) {
    this.eventBus = new EventBus();

    this.id = generationId();
    this._element = undefined;
    this.state = {};
    this.props = this.makePropsProxy(props);
    this.registerEvents();

    this.eventBus.emit(Component.EVENTS.INIT);
  }

  public setState(newState): void {
    Object.assign(this.state, newState);
    this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  private registerEvents(): void {
    this.eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(
      Component.EVENTS.FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this.eventBus.on(Component.EVENTS.FLOW_CDU, (oldProps, newProps) =>
      this._componentDidUpdate(oldProps, newProps)
    );
    this.eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private createResources(): void {
    this._element = this.createDocumentElement('div');
  }

  private init(): void {
    this.createResources();
    this.eventBus.emit(Component.EVENTS.FLOW_CDM);
  }

  private _componentDidMount(): void {
    this.componentDidMount();
    this.eventBus.emit(Component.EVENTS.FLOW_RENDER);
  }

  public componentDidMount(oldProps?: any): boolean {
    return true;
  }

  private _componentDidUpdate = (oldProps: any, newProps: any): void => {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (!response) return;
    this._render();
  };

  public componentDidUpdate(oldProps: any, newProps: any) {
    return true;
  }

  public setProps = (nextProps: any): void => {
    if (!nextProps) return;
    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  getContent() {
    return this.element;
  }

  private _render() {
    if (this._element) {
      this._element.innerHTML = this.render();
    }
  }

  public render(): string {
    return '';
  }

  public mount(el: Element): void {
    el.innerHTML = '';
    el.appendChild(this.getContent());
  }

  private makePropsProxy(props) {
    const self = this;
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        target[prop] = value;
        self.eventBus.emit(Component.EVENTS.FLOW_CDU, { ...target }, target);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет доступа');
      },
    });
  }

  private createDocumentElement(tagName) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }
}

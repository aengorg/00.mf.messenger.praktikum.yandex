import { generationId } from '../../utils/generationId.js';
import { EventBus } from '../EventBus/EventBus.js';
export class Component {
  static EVENTS = {
    BEFORE_CREATE: 'BEFORE_CREATE',
    // CREATE
    CREATED: 'CREATED',
    BEFORE_MOUNT: 'BEFORE_MOUNT',
    // MOUNT
    MOUNTED: 'MOUNTED',
    BEFORE_UPDATE: 'BEFORE_UPDATE',
    // UPDATE
    UPDATED: 'UPDATED',
    BEFORE_DESTROY: 'BEFORE_DESTROY',
    // DESTROY
    DESTROYED: 'DESTROYED',
  };

  id: string;
  el: HTMLElement;

  props: any;
  meta: any;

  children: any[];
  bus = new EventBus();

  constructor(props: any = {}, meta: any = {}, children: any[] = []) {
    this.id = generationId();
    this.el = document.createElement('div');
    this.props = props;
    this.meta = meta;
    this.children = children;

    this.makePropsProxy();
    this.registerEvents();
    this.create();
  }

  private makePropsProxy() {
    const self = this;
    this.props = new Proxy(self.props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, val) {
        target[prop] = val;
        self.update();
        return true;
      },
      deleteProperty(target, prop) {
        throw new Error('Нет доступа');
      },
    });
  }

  private registerEvents() {
    // logs
    this.bus.on(Component.EVENTS.BEFORE_CREATE, () =>
      console.log('EVENT', Component.EVENTS.BEFORE_CREATE)
    );
    this.bus.on(Component.EVENTS.CREATED, () =>
      console.log('EVENT', Component.EVENTS.CREATED)
    );
    this.bus.on(Component.EVENTS.BEFORE_MOUNT, () =>
      console.log('EVENT', Component.EVENTS.BEFORE_MOUNT)
    );
    this.bus.on(Component.EVENTS.MOUNTED, () =>
      console.log('EVENT', Component.EVENTS.MOUNTED)
    );
    this.bus.on(Component.EVENTS.BEFORE_UPDATE, () =>
      console.log('EVENT', Component.EVENTS.BEFORE_UPDATE)
    );
    this.bus.on(Component.EVENTS.UPDATED, () =>
      console.log('EVENT', Component.EVENTS.UPDATED)
    );
    this.bus.on(Component.EVENTS.BEFORE_DESTROY, () =>
      console.log('EVENT', Component.EVENTS.BEFORE_DESTROY)
    );
    this.bus.on(Component.EVENTS.DESTROYED, () =>
      console.log('EVENT', Component.EVENTS.DESTROYED)
    );

    this.bus.on(Component.EVENTS.BEFORE_CREATE, this.onCreate.bind(this));
    this.bus.on(Component.EVENTS.CREATED, this.onCreated.bind(this));
    this.bus.on(Component.EVENTS.BEFORE_MOUNT, this.onMount.bind(this));
    this.bus.on(Component.EVENTS.MOUNTED, this.onMounted.bind(this));
    this.bus.on(Component.EVENTS.BEFORE_UPDATE, this.onUpdate.bind(this));
    this.bus.on(Component.EVENTS.UPDATED, this.onUpdated.bind(this));
    this.bus.on(Component.EVENTS.BEFORE_DESTROY, this.onDestroy.bind(this));
    this.bus.on(Component.EVENTS.DESTROYED, this.onDestroyed.bind(this));
  }

  public insert(rootElement): void {
    rootElement.childNodes[0].replaceWith(this.el);
    this.mount();
  }

  public create(): void {
    this.bus.emit(Component.EVENTS.BEFORE_CREATE);
    this.el.innerHTML = this.render();
    this.bus.emit(Component.EVENTS.CREATED);
  }

  private mount(): void {
    this.bus.emit(Component.EVENTS.BEFORE_MOUNT);
    this.children.forEach((component: any) => component.mount());
    this.bus.emit(Component.EVENTS.MOUNTED);
  }

  private update(): void {
    this.bus.emit(Component.EVENTS.BEFORE_UPDATE);
    this.destroy();

    let text = this.render().trim();
    const html = document.createElement('div');
    html.innerHTML = text;
    this.el.replaceWith(html.childNodes[0]);

    // this.mount();
    this.bus.emit(Component.EVENTS.UPDATED);
  }

  public destroy(): void {
    this.bus.emit(Component.EVENTS.BEFORE_DESTROY);
    if (this.el) {
      this.children.forEach((component: any) => component.destroy());
      this.el.innerHTML = '';
      this.children = [];
    }
    this.bus.emit(Component.EVENTS.DESTROYED);
  }

  public addChildren(component: any): void {
    this.children.push(component);
  }

  public onCreate(): void {}
  public onCreated(): void {}

  public onMount(): void {}
  public onMounted(): void {}

  public onUpdate(): void {}
  public onUpdated(): void {}

  public onDestroy(): void {}
  public onDestroyed(): void {}

  public render(props?: any): string {
    return '';
  }
}

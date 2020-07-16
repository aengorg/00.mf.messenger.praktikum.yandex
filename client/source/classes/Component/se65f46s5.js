export class Component {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render',
  };

  _element = null;
  _meta = null;

  constructor(tagName = 'div', props = {}) {
    console.log('constructor');

    this.eventBus = new EventBus();

    this._meta = {
      tagName,
      props,
    };

    this.props = this._makePropsProxy(props);

    this._registerEvents();
    this.eventBus.emit(Block.EVENTS.INIT);
  }

  _registerEvents(eventBus) {
    console.log('_registerEvents');
    // logs
    this.eventBus.on(Block.EVENTS.INIT, () =>
      console.log('EVENT', Block.EVENTS.INIT)
    );
    this.eventBus.on(Block.EVENTS.FLOW_CDM, () =>
      console.log('EVENT', Block.EVENTS.FLOW_CDM)
    );
    this.eventBus.on(Block.EVENTS.FLOW_CDU, () =>
      console.log('EVENT', Block.EVENTS.FLOW_CDU)
    );
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, () =>
      console.log('EVENT', Block.EVENTS.FLOW_RENDER)
    );

    this.eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    this.eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    this.eventBus.on(
      Block.EVENTS.FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this.eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  _createResources() {
    console.log('_createResources');
    const { tagName } = this._meta;
    this._element = this._createDocumentElement(tagName);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  init() {
    console.log('init');
    this._createResources();
    this.eventBus.emit(Block.EVENTS.FLOW_CDM);
  }

  _componentDidMount() {
    console.log('_componentDidMount');
    this.componentDidMount();
  }

  _componentDidUpdate(oldProps, newProps) {
    console.log('_componentDidUpdate');
    const response = this.componentDidUpdate(oldProps, newProps);
    this.eventBus.emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps) {}

  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    console.log('setProps');

    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  _render() {
    console.log('_render');
    const block = this.render();
    this._element.innerHTML = block;
  }

  render() {}

  getContent() {
    console.log('getContent');
    return this.element;
  }

  _makePropsProxy(props) {
    console.log('_makePropsProxy');
    const self = this;

    return new Proxy(props, {
      get(target, prop) {
        if (prop.startsWith('_')) throw new Error('Нет доступа');

        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, val) {
        if (prop.startsWith('_')) throw new Error('Нет доступа');

        target[prop] = val;
        self.eventBus.emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty(target, prop) {
        throw new Error('Нет доступа');
        // if (prop.startsWith("_")) throw new Error("Нет доступа");

        // delete target[prop];
        // return true;
      },
      ownKeys(target) {
        return Object.keys(target).filter((key) => !key.startsWith('_'));
      },
    });
  }

  _createDocumentElement(tagName) {
    console.log('_createDocumentElement');
    return document.createElement(tagName);
  }

  show() {
    console.log('show');
    this.element.style.display = 'block';
  }

  hide() {
    console.log('hide');
    this.element.style.display = 'none';
  }
}

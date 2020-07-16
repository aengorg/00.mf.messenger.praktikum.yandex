class EventBus {
  listeners: any;

  constructor() {
    this.listeners = {};
  }

  public on(event, callback): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event, callback): void {
    this.isEvent(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );

    if (this.listeners[event].lenght) {
      delete this.listeners[event];
    }
  }

  public emit(event, ...args): void {
    this.isEvent(event);

    this.listeners[event].forEach(function (listener) {
      listener(...args);
    });
  }

  private isEvent(event): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

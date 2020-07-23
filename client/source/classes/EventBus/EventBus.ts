interface IListeners {
  [event: string]: Function[];
}

export class EventBus {
  listeners: IListeners;

  constructor() {
    this.listeners = {};
  }

  public on(event: string, callback: Function): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: string, callback: Function): void {
    this.isEvent(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );

    if (this.listeners[event].length) {
      delete this.listeners[event];
    }
  }

  public clear(): void {}

  public emit(event: string, ...args: any[]): void {
    this.isEvent(event);
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }

  private isEvent(event: string): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

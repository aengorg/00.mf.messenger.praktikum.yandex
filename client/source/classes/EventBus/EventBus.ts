export class EventBus {
  listeners: any;

  constructor() {
    this.listeners = {};
  }

  public on(event: any, callback: any): void {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(callback);
  }

  public off(event: any, callback: any): void {
    this.isEvent(event);

    this.listeners[event] = this.listeners[event].filter(
      (listener) => listener !== callback
    );

    if (this.listeners[event].length) {
      delete this.listeners[event];
    }
  }

  public emit(event: any, ...args: any[]): void {
    this.isEvent(event);
    this.listeners[event].forEach((listener) => {
      listener(...args);
    });
  }

  private isEvent(event: any): void {
    if (!this.listeners[event]) {
      throw new Error(`Нет события: ${event}`);
    }
  }
}

export interface DOMEvent<T extends EventTarget> extends Event {
  target: T;
}

export type ValueType = string | number;

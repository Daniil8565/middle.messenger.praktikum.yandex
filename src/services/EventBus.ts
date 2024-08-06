type Callback = (...args: any[]) => void;

export default class EventBus {
  private _events: Record<string, Callback[]> = {};

  attach(event: string, callback: Callback) {
    if (!this._events[event]) {
      this._events[event] = [];
    }

    this._events[event].push(callback);
  }

  detach(event: string, callback: Callback) {
    if (!this._events[event]) {
      return;
    }

    this._events[event] = this._events[event].filter(
      (item) => item !== callback
    );
  }

  emit(event: string, ...args: unknown[]) {
    if (!this._events[event]) {
      return;
    }

    this._events[event].forEach((cb: unknown) => {
      if (typeof cb === 'function') cb(...args);
    });
  }
}

type EventCallback = (...args: any[]) => void;

class EventEmitter {
  private events: Record<string, EventCallback[]> = {};

  on(eventName: string, callback: EventCallback): void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName: string, callback: EventCallback): void {
    if (!this.events[eventName]) return;
    this.events[eventName] = this.events[eventName].filter((cb) => cb !== callback);
  }

  emit(eventName: string, ...args: any[]): void {
    const eventCallbacks = this.events[eventName];
    if (!eventCallbacks) return;
    eventCallbacks.forEach((callback) => {
      callback(...args);
    });
  }
}

export default EventEmitter;


/* eslint-disable @typescript-eslint/no-explicit-any */
type EventMap = {
  "clients-selected": { selectedClients: string[] };
  "client-deleted": { id: string };
  "client-created": { id: string };
  [key: string]: any;
};

class EventBus<T extends Record<string, any>> {
  private listeners: { [K in keyof T]?: Array<(data: T[K]) => void> } = {};

  on<K extends keyof T>(event: K, callback: (data: T[K]) => void) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event]!.push(callback);
  }

  off<K extends keyof T>(event: K, callback: (data: T[K]) => void) {
    if (this.listeners[event]) {
      this.listeners[event] = this.listeners[event]!.filter(
        (cb) => cb !== callback
      );
    }
  }

  emit<K extends keyof T>(event: K, data: T[K]) {
    if (this.listeners[event]) {
      this.listeners[event]!.forEach((callback) => callback(data));
    }
  }

  clear() {
    Object.keys(this.listeners).forEach((event) => {
      this.listeners[event as keyof T] = [];
    });
  }
}

export const eventBus = new EventBus<EventMap>();

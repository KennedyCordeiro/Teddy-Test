export class GlobalStore {
  private state: Record<string, unknown> = {};
  private subscribers: Array<(state: Record<string, unknown>) => void> = [];

  setState(newState: Record<string, unknown>) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  getState() {
    return this.state;
  }

  subscribe(callback: (state: Record<string, unknown>) => void) {
    this.subscribers.push(callback);

    return () => {
      this.subscribers = this.subscribers.filter((cb) => cb !== callback);
    };
  }

  private notify() {
    this.subscribers.forEach((callback) => callback(this.state));
  }

  clear() {
    this.state = {};
    this.subscribers = [];
  }
}

export const globalStore = new GlobalStore();

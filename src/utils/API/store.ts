import EventBus from "../../services/EventBus";

type Ivalue = {
  [key: string]: unknown;
};

export type Indexed = {
  [key: string]: Ivalue;
};

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: Ivalue) {
    this.state[path] = value;
    console.log("Данные добавлены в состояние:", this.state);
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();

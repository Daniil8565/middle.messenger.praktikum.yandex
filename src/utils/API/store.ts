import EventBus from "../../services/EventBus";
// import set from "./set";

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
    console.log(this.state);
    // set(this.state, path, value);
    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();

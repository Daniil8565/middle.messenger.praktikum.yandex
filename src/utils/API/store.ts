import EventBus from "../../services/EventBus";
import set from "./set";

export type Indexed = {
  [key: string]: string;
};

export enum StoreEvents {
  Updated = "updated",
}

class Store extends EventBus {
  private state: Indexed = {};

  public getState() {
    return this.state;
  }

  public set(path: string, value: unknown) {
    console.log(
      "this.state = ",
      this.state,
      "path = ",
      path,
      "value = ",
      value
    );
    set(this.state, path, value);
    console.log(this.state);
    // метод EventBus
    this.emit(StoreEvents.Updated);
  }
}

export default new Store();

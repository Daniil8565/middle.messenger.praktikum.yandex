import { v4 as makeUUID } from "uuid";
import Handlebars from "handlebars";
import EventBus from "./EventBus.ts";
import IBlock from "./IBlock.ts";

export default class Block implements IBlock {
  static EVENT_INIT = "init";
  static EVENT_FLOW_CDM = "flow:component-did-mount";
  static EVENT_FLOW_CDU = "flow:component-did-update";
  static EVENT_FLOW_RENDER = "flow:render";

  private _props: Record<string, any>;
  private _children: Record<string, Block>;
  private _lists: Record<string, Block[]>;
  private _id: string;
  private _element: HTMLElement | null;
  private _meta: { tag: string; props: unknown };
  private _eventBus: EventBus;
  private _setUpdate = false;

  constructor(
    tag: string = "div",
    propsAndChilds: Record<string, unknown> = {}
  ) {
    const { children, props, lists } = this.getChildren(propsAndChilds);

    this._eventBus = new EventBus();
    this._id = makeUUID();
    this._children = this.makePropsProxy(children);
    this._lists = this.makePropsProxy(lists);
    this._props = this.makePropsProxy({ ...props, __id: this._id });
    this._meta = { tag, props };
    this._element = null;
    this.registerEvents();
    this._eventBus.emit(Block.EVENT_INIT);
  }

  private registerEvents() {
    this._eventBus.attach(Block.EVENT_INIT, this.init.bind(this));
    this._eventBus.attach(
      Block.EVENT_FLOW_CDM,
      this._componentDidMount.bind(this)
    );
    this._eventBus.attach(
      Block.EVENT_FLOW_CDU,
      this._componentDidUpdate.bind(this)
    );
    this._eventBus.attach(Block.EVENT_FLOW_RENDER, this._render.bind(this));
  }

  private init() {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Block.EVENT_FLOW_RENDER);
  }

  private createDocumentElement(tag: string): HTMLElement {
    const element = document.createElement(tag);

    if (this._props.settings?.withInternalID) {
      element.setAttribute("data-id", this._id);
    }
    return element;
  }

  private _render() {
    const block = this.render();
    if (this._element) {
      this.removeEvents();
      this._element.innerHTML = "";
      if (block) {
        this._element.appendChild(block);
      }
      this.addAttribute();
      this.addEvents();
    }
  }

  render() {
    const element = document.createElement("div");
    return element;
  }

  private addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.addEventListener(eventName, events[eventName]);
      }
    });
  }

  private removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      if (this._element) {
        this._element.removeEventListener(eventName, events[eventName]);
      }
    });
  }

  private addAttribute() {
    const { attr = {} } = this._props;
    Object.entries(attr).forEach(([key, value]) => {
      if (this._element && typeof value == "string") {
        this._element.setAttribute(key, value);
      }
    });
  }

  private getChildren(propsAndChilds: Record<string, unknown>) {
    const children: Record<string, Block> = {};
    const props: Record<string, unknown> = {};
    const lists: Record<string, Block[]> = {};

    Object.keys(propsAndChilds).forEach((key) => {
      if (propsAndChilds[key] instanceof Block) {
        children[key] = propsAndChilds[key];
      } else if (Array.isArray(propsAndChilds[key])) {
        lists[key] = propsAndChilds[key];
      } else {
        props[key] = propsAndChilds[key];
      }
    });
    return { children, props, lists };
  }

  compile(template: string, props?: Record<string, any>) {
    if (typeof props == "undefined") {
      props = this._props;
    }
    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this._lists).forEach(([key]) => {
      propsAndStubs[key] = `<div data-id="__1_${key}"></div>`;
    });

    const fragment = this.createDocumentElement(
      "template"
    ) as HTMLTemplateElement;
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent()!);
      }
    });

    Object.entries(this._lists).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="__1_${key}"]`);
      if (!stub) {
        return;
      }

      const listContent = this.createDocumentElement(
        "template"
      ) as HTMLTemplateElement;
      child.forEach((item) => {
        if (item instanceof Block) {
          listContent.content.append(item.getContent()!);
        } else {
          listContent.content.append(`${item}`);
        }
      });

      stub.replaceWith(listContent.content);
    });

    let tmp: unknown = fragment.content;

    return tmp as HTMLDivElement;
  }

  getContent(): HTMLElement | null {
    return this._element;
  }

  _componentDidMount() {
    this.componentDidMount();
    Object.values(this._children).forEach((child) => {
      child.dispatchBlockDidMount();
    });
  }

  componentDidMount() {}

  dispatchBlockDidMount() {
    this._eventBus.emit(Block.EVENT_FLOW_CDM);
    if (Object.keys(this._children).length) {
      this._eventBus.emit(Block.EVENT_FLOW_RENDER);
    }
  }

  _componentDidUpdate(
    oldProps: Record<string, any>,
    newProps: Record<string, any>
  ) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._eventBus.emit(Block.EVENT_FLOW_RENDER);
    }
  }

  componentDidUpdate(
    oldProps: Record<string, any>,
    newProps: Record<string, any>
  ) {
    console.log(newProps, oldProps);
    return true;
  }

  show() {
    const content = this.getContent();
    if (content) {
      content.style.display = "block";
    }
  }

  hide() {
    const content = this.getContent();
    if (content) {
      content.style.display = "none";
    }
  }

  flex() {
    const content = this.getContent();
    if (content) {
      content.style.display = "flex";
    }
  }

  setProps(newProps: Record<string, any>) {
    if (!newProps) {
      return;
    }
    this._setUpdate = false;
    const oldValue = { ...this._props };

    const { children, props } = this.getChildren(newProps);

    if (Object.values(children).length) {
      Object.assign(this._children, children);
    }
    if (Object.values(props).length) {
      Object.assign(this._props, props);
    }
    if (this._setUpdate) {
      this._eventBus.emit(Block.EVENT_FLOW_CDU, oldValue, this._props);
      this._setUpdate = false;
    }
  }

  makePropsProxy(props: Record<string, any>): Record<string, any> {
    return new Proxy(props, {
      get(target, prop: string | symbol) {
        const value = target[prop as keyof typeof target];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set: (target, prop: string | symbol, value) => {
        if (target[prop as keyof typeof target] !== value) {
          target[prop as keyof typeof target] = value;
          this._setUpdate = true;
        }
        return true;
      },
    });
  }
}

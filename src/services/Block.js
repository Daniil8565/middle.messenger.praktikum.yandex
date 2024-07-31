import { v4 as makeUUID } from 'uuid';
import Handlebars from 'handlebars';
import EventBus from './EventBus.js';

export default class Block {
  static EVENT_INIT = 'init';
  static EVENT_FLOW_CDM = 'flow:component-did-mount';
  static EVENT_FLOW_CDU = 'flow:component-did-update';
  static EVENT_FLOW_RENDER = 'flow:render';

  _props;
  _children;
  _lists;
  _id;
  _element;
  _meta;
  _eventBus;
  _setUpdate = false;

  constructor(tag = 'div', propsAndChilds = {}) {
    const { children, props, lists } = this.getChildren(propsAndChilds);

    this._eventBus = new EventBus();
    this._id = makeUUID();
    this._children = this.makePropsProxy(children);
    this._lists = this.makePropsProxy(lists);
    this._props = this.makePropsProxy({ ...props, __id: this._id });
    this._meta = { tag, props };

    this.registerEvents();
    this._eventBus.emit(Block.EVENT_INIT);
  }

  registerEvents() {
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

  init() {
    this._element = this.createDocumentElement(this._meta?.tag);
    this._eventBus.emit(Block.EVENT_FLOW_RENDER);
  }

  createDocumentElement(tag) {
    const element = document.createElement(tag);

    if (this._props.settings?.withInternalID) {
      element.setAttribute('data-id', this._id);
    }
    return element;
  }

  _render() {
    const block = this.render();
    this.removeEvents();
    this._element.innerHTML = '';
    this._element.appendChild(block);
    this.addAttribute();
    this.addEvents();
  }

  render() {}

  addEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.addEventListener(eventName, events[eventName]);
    });
  }

  removeEvents() {
    const { events = {} } = this._props;
    Object.keys(events).forEach((eventName) => {
      this._element.removeEventListener(eventName, events[eventName]);
    });
  }

  addAttribute() {
    const { attr = {} } = this._props;
    Object.entries(attr).forEach(([key, value]) => {
      this._element.setAttribute(key, value);
    });
  }

  getChildren(propsAndChilds) {
    const children = {};
    const props = {};
    const lists = {};

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

  compile(template, props) {
    if (typeof props == 'undefined') {
      props = this._props;
    }
    const propsAndStubs = { ...props };

    Object.entries(this._children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this._lists).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="__1_${key}"></div>`;
    });

    const fragment = this.createDocumentElement('template');
    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    Object.values(this._children).forEach((child) => {
      const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
      if (stub) {
        stub.replaceWith(child.getContent());
      }
    });

    Object.entries(this._lists).forEach(([key, child]) => {
      const stub = fragment.content.querySelector(`[data-id="__1_${key}"]`);
      if (!stub) {
        return;
      }

      const listContent = this.createDocumentElement('template');
      child.forEach((item) => {
        if (item instanceof Block) {
          listContent.content.append(item.getContent());
        } else {
          listContent.content.append(`${item}`);
        }
      });

      stub.replaceWith(listContent.content);
    });

    return fragment.content;
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

  _componentDidUpdate(oldProps, newProps) {
    const isReRender = this.componentDidUpdate(oldProps, newProps);
    if (isReRender) {
      this._eventBus.emit(Block.EVENT_FLOW_RENDER);
    }
  }

  componentDidUpdate(oldProps, newProps) {
    console.log(newProps, oldProps);
    return true;
  }

  // setProps(newProps) {
  //   if (!newProps) {
  //     return;
  //   }

  //   const { children, props } = this.getChildren(newProps);

  //   if (Object.values(children).length) {
  //     Object.assign(this._children, children);
  //   }
  //   if (Object.values(props).length) {
  //     Object.assign(this._props, props);
  //   }
  // }

  // makePropsProxy(props) {
  //   return new Proxy(props, {
  //     get(target, prop) {
  //       const value = target[prop];
  //       return typeof value === 'function' ? value.bind(target) : value;
  //     },
  //     set: (target, prop, value) => {
  //       const oldValue = { ...target };
  //       target[prop] = value;
  //       this._eventBus.emit(Block.EVENT_FLOW_CDU, oldValue, target);
  //       return true;
  //     },
  //   });
  // }

  show() {
    this.getContent().style.display = 'block';
  }

  hide() {
    this.getContent().style.display = 'none';
  }

  flex() {
    this.getContent().style.display = 'flex';
  }

  getContent() {
    return this._element;
  }

  setProps(newProps) {
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

  makePropsProxy(props) {
    return new Proxy(props, {
      get(target, prop) {
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set: (target, prop, value) => {
        if (target[prop] !== value) {
          target[prop] = value;
          this._setUpdate = true;
        }
        return true;
      },
    });
  }
}

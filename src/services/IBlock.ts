interface IBlockProps {
  [key: string]: any;
}

export default interface IBlock {
  // Методы
  render(): HTMLElement;
  compile(template: string, props?: IBlockProps): void;
  getContent(): HTMLElement | null;
  _componentDidUpdate(
    oldProps: Record<string, any>,
    newProps: Record<string, any>
  ): void;
  componentDidUpdate(
    oldProps: Record<string, any>,
    newProps: Record<string, any>
  ): void;
  dispatchBlockDidMount(): void;
  show(): void;
  hide(): void;
  flex(): void;
  remove(): void;
  setProps(newProps: Record<string, any>): void;
  makePropsProxy(props: Record<string, any>): Record<string, any>;
}

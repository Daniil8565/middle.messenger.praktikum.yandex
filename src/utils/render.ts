import IBlock from "../services/IBlock";

export default function render(
  query: string,
  component: IBlock,
): HTMLElement | null {
  const root = document.querySelector(query) as HTMLElement;

  if (root && component.getContent() instanceof HTMLElement) {
    root.appendChild(component.getContent() as Node);
  }
  component.dispatchBlockDidMount();
  return root;
}

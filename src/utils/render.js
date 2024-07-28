export default function render(query, component) {
  const root = document.querySelector(query);

  if (root) {
    root.appendChild(component.getContent());
  }
  component.dispatchBlockDidMount();
  return root;
}

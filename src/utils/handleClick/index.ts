import router from "../Router/Router";

export default function handleLinkClick(event: MouseEvent): void {
  event.preventDefault();
  const link = event.target as HTMLAnchorElement | null;
  if (link) {
    const href = link.getAttribute("href");
    if (href) {
      console.log(href);
      router.go(href);
    }
  }
}

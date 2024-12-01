import router from "../../index.ts";
import UserLoginController from "../API/UserLoginController/index.ts";

let controller = new UserLoginController();

export default function handleLinkClick(event: MouseEvent): void {
  event.preventDefault();
  const link = event.target as HTMLAnchorElement | null;
  if (link) {
    if (link.className == "exit") {
      controller.logout();
    } else {
      const href = link.getAttribute("href");
      if (href === "/Profile") {
        controller.getData();
      }
      if (href) {
        router.go(href);
      }
    }
  }
}

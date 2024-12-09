import { flag } from "../CheckingData/CheckMessage/index.ts";
import { SOC } from "../socket.ts";
import getMessage from "../getMessage/index.ts";

export default function socket(e: SubmitEvent) {
  e.preventDefault();
  console.log("socket--------", flag);
  if (flag) {
    let message = getMessage();

    // console.log("SOC", SOC);
    SOC.send(
      JSON.stringify({
        content: message,
        type: "message",
      })
    );

    const input = document.querySelector(".input__message") as HTMLInputElement;
    input.value = "";
  } else {
    console.log("Введите данные");
  }
}

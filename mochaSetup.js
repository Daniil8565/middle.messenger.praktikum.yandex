import { JSDOM } from "jsdom";

const jsdom = new JSDOM(
  `
    <!DOCTYPE html>
    <html>
        <body>
            <div id="app"></div>
        </body>
    </html>`,
  { url: "http://localhost" }
);

if (typeof global.structuredClone === "undefined") {
  global.structuredClone = (value) => JSON.parse(JSON.stringify(value));
}

global.window = jsdom.window;
global.document = jsdom.window.document;

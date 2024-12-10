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

global.window = jsdom.window;
global.document = jsdom.window.document;

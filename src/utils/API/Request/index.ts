export default class Request {
  private _method: string;
  private _url: string;
  private _headers: Headers;
  private _body: any;
  private _queryString: string | undefined;

  constructor(
    url: string,
    method: string = "GET",
    headers: Headers = new Headers(),
    body?: any,
    queryString?: string
  ) {
    this._method = method.toUpperCase();
    this._url = url;
    this._headers = headers;
    this._body = body;
    this._queryString = queryString;
  }

  setHeaders(headers: Headers): void {
    this._headers = headers;
  }

  setBody(body: any): void {
    this._body = body;
  }

  setQueryString(queryString: string): void {
    this._queryString = queryString;
  }

  async send(): Promise<XMLHttpRequest> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(
        this._method,
        this._url + (this._queryString ? `?${this._queryString}` : "")
      );

      // Установить заголовки, если тело запроса не FormData
      if (this._body && !(this._body instanceof FormData)) {
        this._headers.set("Content-Type", "application/json");
      }

      this._headers.forEach((value, key) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.withCredentials = true;

      xhr.onload = () => {
        const status = xhr.status || 0;
        if (status >= 200 && status < 300) {
          resolve(xhr);
        } else {
          reject({ reason: xhr.response });
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network Error"));
      };

      if (this._body) {
        console.log("Тип данных тела запроса:", this._body.constructor.name);
        if (this._body instanceof FormData) {
          console.log("FormData содержимое:");
          this._body.forEach((value, key) => {
            console.log(`${key}:`, value);
          });
        } else {
          console.log("Тело запроса (JSON):", this._body);
        }
      }

      // Отправка данных
      if (this._method === "GET") {
        xhr.send();
      } else if (this._body instanceof FormData) {
        xhr.send(this._body); // FormData отправляется как есть
      } else {
        xhr.send(JSON.stringify(this._body)); // Отправка JSON
      }
    });
  }

  get(url: string, headers?: Headers, queryString?: string): Request {
    return new Request(url, "GET", headers, undefined, queryString);
  }

  post(url: string, body?: any, headers?: Headers): Request {
    return new Request(url, "POST", headers, body);
  }

  put(url: string, body: any, headers?: Headers): Request {
    return new Request(url, "PUT", headers, body);
  }

  delete(url: string, body?: any, headers?: Headers): Request {
    return new Request(url, "DELETE", headers, body); // теперь принимаем body
  }
}

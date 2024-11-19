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
      console.log(
        this._url + (this._queryString ? `?${this._queryString}` : "")
      );
      xhr.open(
        this._method,
        this._url + (this._queryString ? `?${this._queryString}` : "")
      );

      // Установить заголовок Content-Type для POST-запросов с JSON
      if (this._method !== "GET") {
        this._headers.set("Content-Type", "application/json");
      }

      // Установить все заголовки
      this._headers.forEach((value, key) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        const status = xhr.status || 0;
        if (status >= 200 && status < 300) {
          resolve(xhr);
        } else {
          console.log(xhr.response);
          reject({ reason: xhr.response });
        }
      };

      xhr.onerror = () => {
        reject(new Error("Network Error"));
      };

      // Отправка данных в теле запроса
      if (this._method === "GET") {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(this._body));
      }
    });
  }

  get(url: string, headers?: Headers, queryString?: string): Request {
    return new Request(url, "GET", headers, undefined, queryString);
  }

  post(url: string, body: any, headers?: Headers): Request {
    return new Request(url, "POST", headers, body);
  }

  put(url: string, body: any, headers?: Headers): Request {
    return new Request(url, "PUT", headers, body);
  }

  delete(url: string, headers?: Headers): Request {
    return new Request(url, "DELETE", headers);
  }
}

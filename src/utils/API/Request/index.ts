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

  async send(): Promise<Response> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      // Исправленная строка:
      console.log(
        this._url + (this._queryString ? `?${this._queryString}` : "")
      );
      xhr.open(
        this._method,
        this._url + (this._queryString ? `?${this._queryString}` : "")
      );
      this._headers.forEach((value, key) => {
        xhr.setRequestHeader(key, value);
      });

      xhr.onload = () => {
        const response = new Response(xhr.responseText, {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: new Headers(
            xhr
              .getAllResponseHeaders()
              .split("\n")
              .reduce((acc, header) => {
                const [key, value] = header.split(": ");
                if (key && value) {
                  acc.set(key.trim(), value.trim());
                }
                return acc;
              }, new Headers())
          ),
        });
        resolve(response);
      };

      xhr.onerror = () => {
        reject(new Error("Network Error"));
      };

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

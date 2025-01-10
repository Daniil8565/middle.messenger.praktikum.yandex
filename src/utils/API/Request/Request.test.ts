import { expect } from "chai";
import { createSandbox } from "sinon";
import sinonChai from "sinon-chai";
import { use } from "chai";
import { URL } from "../BaseAPI.ts";
import Request from "./index.ts";

use(sinonChai);

describe("Request", () => {
  const sandbox = createSandbox();
  let request: Request;

  beforeEach(() => {
    request = new Request(URL);
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("Проверка создания GET запроса с правильным URL и Method", () => {
    const getRequest = request.get(URL, undefined, "param=value");
    expect(getRequest.getUrlANDMethod()).to.deep.equal({
      url: URL,
      method: "GET",
    });
  });

  it("Проверка создания POST запроса с правильным URL и Method", () => {
    const postRequest = request.post(URL, { key: "value" });
    expect(postRequest.getUrlANDMethod()).to.deep.equal({
      url: URL,
      method: "POST",
    });
  });

  it("Проверка создания PUT запроса с правильным URL и Method", () => {
    const putRequest = request.put(URL, { key: "value" });
    expect(putRequest.getUrlANDMethod()).to.deep.equal({
      url: URL,
      method: "PUT",
    });
  });

  it("Проверка создания DELETE запроса с правильным URL и Method", () => {
    const deleteRequest = request.delete(URL, { key: "value" });
    expect(deleteRequest.getUrlANDMethod()).to.deep.equal({
      url: URL,
      method: "DELETE",
    });
  });
});

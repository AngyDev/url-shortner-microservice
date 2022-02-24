import { expect } from "chai";
import request from "request";

const baseUrl = "http://localhost:3000";

describe("Server up", () => {
  const url = baseUrl + "/";

  it("returns status 200", (done) => {
    request(url, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

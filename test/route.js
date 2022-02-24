import { expect } from "chai";
import chai from "chai";
import request from "request";
import should from "should";
import app from "../index.js";
import chaiHttp from "chai-http";

chai.use(chaiHttp);

const baseUrl = "http://localhost:3000";
const url = baseUrl + "/api/shorturl";

describe("Write URL and SHORTURL", () => {
  const body = {
    url: "https://tomorrowdevs.com",
  };

  it("returns status 200", (done) => {
    request({ url: url, method: "post", form: body }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it("returns a json", (done) => {
    request({ url: url, method: "post", form: body }, (error, response, body) => {
      expect(body).should.be.json;
      done();
    });
  });

  it("returns an object with original_url and short_url", (done) => {
    chai
      .request(baseUrl)
      .post("/api/shorturl")
      .send(body)
      .end((error, res) => {
        should.not.exist(error);
        expect(res.statusCode).to.equal(200);
        res.body.should.have.property("original_url");
        res.body.should.have.property("short_url");
        done();
      });
  });
});

describe("Redirect url from shorturl", () => {
  const apiUrl = url + "/V7YM2SzYkJFHQD4mVzIkP";

  it("returns status 200", (done) => {
    request(apiUrl, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});

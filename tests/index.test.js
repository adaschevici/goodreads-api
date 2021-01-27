const express = require("express");
const request = require("supertest");
const indexRoute = require("../routes");

const initApp = () => {
  const app = express();
  app.use(indexRoute);
  return app;
};

describe("GET /", () => {
  test("It should fetch root", async () => {
    const app = initApp();
    const theres = await request(app).get("/");
    expect(theres.body).toStrictEqual({ Hello: "World" });
  });
});

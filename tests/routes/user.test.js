const request = require("supertest");
const app = require("../../app");

describe("GET /auth/login", () => {
  test("It should get a bad request if no payload present", async () => {
    const theres = await request(app).post("/auth/login");
    console.log(theres.status);
    expect(theres.status).toStrictEqual(400);
  });
  test("It should get 401 if email password combo is not ok", async () => {
    const theres = await request(app).post("/auth/login").type("form").send({
      email: "art",
      password: "password",
    });
    expect(theres.status).toStrictEqual(401);
  });
  test("It should get 200 if correct email and password", async () => {
    const theres = await request(app).post("/auth/login").type("form").send({
      email: "simple@user.com",
      password: "superpassword",
    });
    expect(theres.status).toStrictEqual(200);
  });
});

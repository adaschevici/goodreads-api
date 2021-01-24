const { register } = require("../services/user.js");

module.exports = (app) => {
  app.post("/auth/login", function (req, res, next) {
    res.send({ msg: "Great Success LOGIN" });
  });

  app.post("/auth/register", async function (req, res, next) {
    const { fullName, email, password, rePassword } = req.body;
    if (password !== rePassword) throw Error("Confirm pass not matching");
    const response = await register({ fullName, email, password });
    console.log(response);
    res.send({ msg: "User succesfully registered" });
  });

  app.post("/auth/check-token", function (req, res, next) {
    res.send({ msg: "Great Success CHECK TOKEN" });
  });
};

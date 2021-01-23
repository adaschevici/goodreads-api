var express = require("express");
var router = express.Router();
const { register } = require("../controllers/user.js");

router.post("/login", function (req, res, next) {
  res.send({ msg: "Great Success LOGIN" });
});

router.post("/register", async function (req, res, next) {
  const { fullName, email, password, rePassword } = req.body;
  if (password !== rePassword) throw Error("Confirm pass not matching");
  const response = await register({ fullName, email, password });
  console.log(response);
  res.send({ msg: "User succesfully registered" });
});

router.post("/check-token", function (req, res, next) {
  res.send({ msg: "Great Success CHECK TOKEN" });
});

module.exports = router;

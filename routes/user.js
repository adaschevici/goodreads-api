var express = require("express");
var router = express.Router();

router.post("/login", function (req, res, next) {
  res.json({ msg: "Great Success LOGIN" });
});

router.post("/register", function (req, res, next) {
  res.json({ msg: "Great Success REGISTER" });
});

router.post("/check-token", function (req, res, next) {
  res.json({ msg: "Great Success CHECK TOKEN" });
});

module.exports = router;

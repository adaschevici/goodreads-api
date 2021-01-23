var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/login", function (req, res, next) {
  res.send({ msg: "Great Success" });
});

router.post("/register", function (req, res, next) {
  res.send("user/register");
});

module.exports = router;

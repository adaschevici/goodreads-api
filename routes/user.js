const passport = require("passport");
const jwt = require("jsonwebtoken");
const { register, login } = require("../services/user.js");

const secret = process.env.JWT_SECRET;

const withAuth = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};

module.exports = (app) => {
  app.post(
    "/auth/register",
    passport.authenticate("local-signup", {
      passReqToCallback: true,
      failureRedirect: "/register", // redirect back to the signup page if there is an error
    }),
    (req, res) => {
      return res.status(200).json({ urlRedirect: "/" });
    }
  );
  app.post("/auth/login", passport.authenticate("local-login"), (req, res) => {
    console.log(req, res);
    console.log(req.user);
    return res.status(200).json({ msg: "Successful login" });
  });

  app.get(
    "/auth/github",
    passport.authenticate("github", {
      scope: ["user:email"],
    })
  );

  app.get(
    "/auth/github/callback",
    passport.authenticate("github"),
    (req, res) => {
      const { accessToken } = req.user.tokens[0];
      res.cookie("token", accessToken, { httpOnly: true });
      res.cookie("type", "github");
      res.redirect("/");
    }
  );

  app.post("/auth/check-token", withAuth, function (req, res, next) {
    const { email } = req;
    return res.json({ username: email }).status(200);
  });
};

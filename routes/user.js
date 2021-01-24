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
  app.post("/auth/login", async function (req, res, next) {
    const { email, password } = req.body;
    try {
      const token = await login({ email, password });
      if (!token) {
        throw Error("Token is null");
      }
      return res
        .cookie("token", token, { httpOnly: true })
        .sendStatus(200)
        .json({ msg: "Token successfully generated" });
    } catch (e) {
      /* handle error */
      return res
        .status(401)
        .json({ msg: "Invalid Email + Password combination" });
    }
  });

  app.post("/auth/register", async function (req, res, next) {
    const { fullName, email, password, rePassword } = req.body;
    if (password !== rePassword) throw Error("Confirm pass not matching");
    const response = await register({ fullName, email, password });
    return res
      .status(200)
      .json({ msg: "User succesfully registered", response });
  });

  app.post("/auth/check-token", withAuth, function (req, res, next) {
    const { email } = req;
    return res.json({ username: email }).status(200);
  });
};

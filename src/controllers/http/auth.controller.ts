import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import passport from "#root/passport";

export const loginLocal = asyncHandler(async (req, res, next) => {
  await passport.authenticate("local", (err, user) => {
    if (user == false) {
      res.send("Login failed");
    } else {
      const payload = {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET || "qqq");

      res.send({ user: user.displayName, token: "JWT " + token });
    }
  });
});

export const loginJwt = asyncHandler(async (req, res, next) => {
  await passport.authenticate("jwt", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  });
});

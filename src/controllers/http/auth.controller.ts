import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import passport from "#root/passport";

import accessEnv from "#root/hellpers/accessEnv";

export const signIn = asyncHandler(async (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) return next(err);

    if (!user) {
      res.send("Auth failed");
    } else {
      const payload = {
        id: user.id,
        login: user.login,
      };
      const token: string = jwt.sign(payload, accessEnv("JWT_SECRET"));

      res.send({ login: user.login, token });
    }
  })(req, res, next);
});

export const signUp = asyncHandler(async (req, res, next) => {});

export const signOut = asyncHandler(async (req, res, next) => {});

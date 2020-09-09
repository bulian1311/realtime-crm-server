import express from "express";
import * as authController from "#root/controllers/http/auth.controller";

const router = express.Router({ mergeParams: true });

router
  .post("/signin", authController.signIn)
  .post("/signup", authController.signUp)
  .post("/signout", authController.signOut);

export default router;

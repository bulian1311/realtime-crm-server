import express from "express";

import passport from "#root/passport";
import * as taskController from "#root/controllers/http/task.controller";

const router = express.Router({ mergeParams: true });

router.route("/").get(passport.authenticate("jwt"), taskController.getAllTasks);

export default router;

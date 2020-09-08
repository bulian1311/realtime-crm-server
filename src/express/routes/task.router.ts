import express from "express";

import * as taskController from "#root/controllers/http/task.controller";

const router = express.Router({ mergeParams: true });

router.route("/").get(taskController.getAllTasks);

export default router;

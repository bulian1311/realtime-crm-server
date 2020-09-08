import express from "express";

import * as columnController from "#root/controllers/http/column.controller";

const router = express.Router({ mergeParams: true });

router.route("/").get(columnController.getAllColumns);

export default router;

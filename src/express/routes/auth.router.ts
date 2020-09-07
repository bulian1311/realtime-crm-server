import express from "express";

const router = express.Router({ mergeParams: true });

router
  .route("/")
  .get(() => {})
  .post(() => {});

export default router;

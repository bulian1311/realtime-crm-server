import express from "express";

const router = express.Router({ mergeParams: true });

router.route("/").get((req, res) => {
  res.json({ message: "Hello!" });
});

export default router;

import express from "express";
import cors from "cors";

const expressApp = express();

expressApp.use(cors());

expressApp.get("/", (req, res) => {
  res.send("Hello");
});

export default expressApp;

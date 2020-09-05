import express from "express";
import cors from "cors";
import helmet from "helmet";

const expressApp = express();

expressApp.use(cors());
expressApp.use(helmet());

expressApp.get("/", (req, res) => {
  res.send("Hello");
});

export default expressApp;

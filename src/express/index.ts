import express from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

import passport from "#root/passport";
import routesInit from "#express/routes";

const expressApp = express();

expressApp.use(bodyParser.json());
expressApp.use(bodyParser.urlencoded({ extended: false }));

expressApp.use(passport.initialize());
expressApp.use(cors());
expressApp.use(helmet());

routesInit(expressApp);

export default expressApp;

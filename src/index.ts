import dotenv from "dotenv";
import { authenticate } from "./sequelize";

import "./server";
import "./sockets";

dotenv.config();

authenticate();

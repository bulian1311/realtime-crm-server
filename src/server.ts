import express from "express";
import dotenv from "dotenv";

dotenv.config();

const server = express();

server.listen(process.env.PORT || 4000, () =>
  console.log(
    `Сервер запущен в ${process.env.NODE_ENV} моде, на порте ${process.env.PORT}`
  )
);
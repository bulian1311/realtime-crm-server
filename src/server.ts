import http from "http";

import expressApp from "./express";

const server = http.createServer(expressApp);

server.listen(process.env.PORT || 4000, () =>
  console.log(
    `Сервер запущен в ${process.env.NODE_ENV} моде, на порте ${process.env.PORT}`
  )
);

export default server;

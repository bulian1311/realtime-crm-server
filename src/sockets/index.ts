import socketIo from "socket.io";
import socketioJwt from "socketio-jwt";

import server from "#root/server";

import accessEnv from "#root/hellpers/accessEnv";

const io = socketIo(server);

// io.on("connection", (socket) => {
//   console.log("a user connected");

//   setInterval(() => getApiAndEmit(socket), 1000);

//   socket.on("disconnect", () => {
//     console.log("user disconnected");
//   });
// });

const getApiAndEmit = (socket: any) => {
  const response = new Date().getSeconds();
  socket.emit("qqq", response);
};

//Auth....................
io.on(
  "connection",
  socketioJwt.authorize({
    secret: accessEnv("JWT_SECRET"),
    timeout: 15000,
  })
).on("authenticated", (socket: any) => {
  console.log("this is the name from the JWT: " + socket.decoded_token);

  setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("clientEvent", (data: any) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

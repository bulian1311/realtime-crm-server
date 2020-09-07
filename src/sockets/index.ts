import socketIo from "socket.io";
import socketioJwt from "socketio-jwt";

import server from "#root/server";

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
  socket.emit("FromAPI", response);
};

//Auth....................
io.on(
  "connection",
  socketioJwt.authorize({
    secret: process.env.JWT_SECRET || "qqq",
    timeout: 15000,
  })
).on("authenticated", (socket: any) => {
  console.log(
    "this is the name from the JWT: " + socket.decoded_token.displayName
  );

  setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("clientEvent", (data: any) => {
    console.log(data);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

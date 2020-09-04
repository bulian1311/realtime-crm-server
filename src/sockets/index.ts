import socketIo from "socket.io";

import server from "../server";

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("a user connected");

  setInterval(() => getApiAndEmit(socket), 1000);

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

const getApiAndEmit = (socket: any) => {
  const response = new Date().getSeconds();
  socket.emit("FromAPI", response);
};

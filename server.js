const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname)));
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
  },
});

let onlineUsers = [];

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("join", (username) => {
    socket.username = username;
    onlineUsers.push(username);
    io.emit("updateUsers", onlineUsers);
    console.log(`${username} joined the chat`);
  });

  socket.on("message", (msg) => {
    io.emit("message", { user: socket.username, text: msg });
  });

  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((user) => user !== socket.username);
    io.emit("updateUsers", onlineUsers);
    console.log(`${socket.username} disconnected`);
  });
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

const express = require("express");

function socketRouter(io) {
  const router = express.Router();

  const emitSocket = () => {
    // io.on("connection", (socket) => {
    //   console.log(socket.id);
    // });

    router.post("/emitlog", (req, res) => {
      console.log(req.body);
      io.emit("chat", req.body);
      res.send("test");
    });
  };

  emitSocket();

  return {
    router,
  };
}

module.exports = socketRouter;

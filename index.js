const express = require("express");
const app = express();

const server = require("http").createServer(app);
const io = require("socket.io")(server, { cors: { origin: "*" } });
const socketRouter = require("./routes/socketRouter")(io).router;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1", socketRouter);

//  app request
app.get("/", (req, res) => {
  res.render("index");
});

// app api request
// app.get("/api", socketRouter);

// socket

// io.on("connection", (socket) => {
//   console.log(socket.id);

//   socket.on("chat", (msg) => {
//     io.emit("chat", msg);
//   });
// });

server.listen(process.env.PORT || 3001, () => {
  console.log("Server started");
});

const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static("client"));

io.on("connection", socket => {
    console.log("Ada yang terhubung ke server!");
    socket.on("kirim-pesan", pesan => {
        console.log(pesan);
        socket.broadcast.emit("pesan-baru", pesan);
    });
});


server.listen(3000);


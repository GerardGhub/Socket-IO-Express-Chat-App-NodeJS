//express JS
var express = require("express");
var app = express();
app.listen(7070, startup);
function startup() {
    console.log("Server started at port 7070");
}
app.use(express.static(__dirname));

//Socket IO
var http = require("http");
var server = http.createServer();
server.listen(9090);
var socketio = require("socket.io");
// var io = socketio(server);
var io = new socketio.Server(server, { cors: { origin: '*' } });

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");


});

io.on("connect", function(client) {
    console.log("New Client is Connected");

    client.on("clientmessage", function() {
       console.log("client message received"); 
    });
});
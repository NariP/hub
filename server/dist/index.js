"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var http_1 = require("http");
var cors = require("cors");
// const cors = require("cors");
var app = express();
var port = 5000;
var server = (0, http_1.createServer)(app);
app.get("/", function (req, res) {
    return res.send("hello world");
});
app.use(cors({
    origin: "*",
}));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// deprecated 된 body-parser 대신 사용
app.get("/api", function (req, res) {
    return res.json({ ok: true, user: "nr2p" });
});
server.listen(port, function () { return console.log("port " + port + " listening"); });

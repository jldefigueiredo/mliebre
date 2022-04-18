const express = require("express");
const path = require("path");

const app = express();

const publicPath = (path.resolve(__dirname, "./public"));
app.use(express.static(publicPath));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/vender", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/vender.html"))
});

app.get("/creatucuenta", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/creatucuenta.html"))
});

app.get("/ingresa", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/ingresa.html"))
});

app.listen(3000, () => {
    console.log("Server running.");
    });
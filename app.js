let express = require("express");
let app = express();
let path = require("path");

app.use(express.static("public"));

app.listen(3030, () => console.log("Servidor corriendo"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
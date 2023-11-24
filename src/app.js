let express = require("express");
let app = express();
let path = require("path");

app.use(express.static("public"));

const port = process.env.PORT || 3001;
app.listen(port, () => console.log("Servidor corriendo en el puerto 3001"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "./views/home.html"));
});

app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname, "./views/register.html"));
});

app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname, "./views/login.html"));
});
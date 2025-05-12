import express from "express";
import path from 'path';
const __dirname = path.resolve();

const app = express();
const port = 80;

app.use(express.static("frontend"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontend/src/html/home.html");
});

app.listen(port, () => {
    console.log('server is listening at localhost: '+ port);
});

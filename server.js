import express from "express";

const __dirname = path.resolve();
const app = express();

app.use(express.static("forntend"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const port = 80;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "\\forntend\\src\\html\\home.html");
});

app.listen(port, () => {
    console.log('server is listening at localhost: 80')
})
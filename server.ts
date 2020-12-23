const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 5000;
// define a route handler for the default home page
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept",
    );
    next();
});
app.post("/sum", (req, res) => {
    try {
        const { body } = req;
        let sum = Number(body.num1) + Number(body.num2);
        res.json({ sum });
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error with github");
    }
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

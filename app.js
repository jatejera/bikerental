require("dotenv").config();
const express = require("express");
let app = express();
let port;

if (process.env.NODE_ENV == "production") {
    port = process.env.PORT || 80;
} else {
    port = process.env.PORT || 3000;
}

app.use(express.static("dist"));

app.get("/download", (req, res) => res.download("demoapp.zip"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

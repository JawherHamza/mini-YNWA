const express = require("express");
const db = require("./utils/db");
const bodyParser = require("body-parser");
const app = express();
const server = require("http").createServer(app);
const PORT = 8080;
const cors = require("cors");
var postRoute = require("./routes/postRoute");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: "10mb" }));

app.use("/post", postRoute);
server.listen(PORT, () => console.log("API STARTED", PORT));

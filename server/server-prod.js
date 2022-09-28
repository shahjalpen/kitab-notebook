import path from "path";
import express from "express";

var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();

const app = express(),
  DIST_DIR = __dirname,
  HTML_FILE = path.join(DIST_DIR, "index.html");

app.use(express.static(DIST_DIR));

app.all("/api/*", function (req, res) {
  apiProxy.web(req, res, { target: "http://localhost:8085" });
});

app.get("*", (req, res) => {
  res.sendFile(HTML_FILE);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening to ${PORT}....`);
  console.log("Press Ctrl+C to quit.");
});

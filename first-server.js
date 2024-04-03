const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page.");
  } else if (req.url === "/about") {
    res.end("<h1>This is the about section</h1>");
  } else {
    res.end("These are not the pages you're looking for.");
  }
});

server.listen("5000");

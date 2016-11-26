const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
  if(req.method ===  "GET") {
    const urlObj = url.parse(req.url, true);

    res.writeHead(200, {"Content-Type": "application/json"});

    if(urlObj.pathname === "/api/parsetime") {
      const date = new Date(urlObj.query.iso);
      const dateObj = {
        "hour":   date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      };
      res.write(JSON.stringify(dateObj));
    } else if (urlObj.pathname === "/api/unixtime") {
      const date = new Date(urlObj.query.iso);
      const dateObj = {
        "unixtime": date.getTime()
      };
      res.write(JSON.stringify(dateObj));
    }
    
    res.end();
  }
});

// Grab port from cmd line
server.listen(process.argv[2]);
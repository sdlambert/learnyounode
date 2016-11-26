const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {
  if(req.method ===  "POST") {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    req.pipe(map((chunk) => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
  }
});

// Grab port from cmd line
server.listen(process.argv[2]);
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const dst = fs.createReadStream(process.argv[3]);
  dst.pipe(res);
});

// Grab port from cmd line
server.listen(process.argv[2]);
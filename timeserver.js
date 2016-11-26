const net = require('net');

const server = net.createServer((socket) => {
  const date = new Date();
  let dateStr = "";

  dateStr = dateStr.concat(date.getFullYear(),
                 "-",
                 fmtNum(date.getMonth()+1),
                 "-",
                 fmtNum(date.getDate()),
                 " ",
                 fmtNum(date.getHours()),
                 ":",
                 fmtNum(date.getMinutes()),
                 "\n"
                 );

  socket.end(dateStr);
});

function fmtNum(num) {
  return (num < 10) ?  "0" + num : num;
}

server.listen(process.argv[2]);
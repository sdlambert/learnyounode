const http   = require('http');
const concat = require('concat-stream');

let i = 2; // starting URL index

function getNextURL () {
  http.get(process.argv[i], (res) => {
    res.setEncoding("utf8");
    res.pipe(concat((data) => {
      console.log(data.toString());
    }));
    res.on("error", console.error);
    res.on("end", () => {
      if(++i <= 4) // grabbing arguments 2, 3 and 4
        getNextURL();
    }); // do something here
  }).on("error", console.error);

}

getNextURL();
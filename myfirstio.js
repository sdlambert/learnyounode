const fs = require('fs');

let fileBuffer = fs.readFileSync(process.argv[2]);

console.log(fileBuffer.toString().split('\n').length - 1);
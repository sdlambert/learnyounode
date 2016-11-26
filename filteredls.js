const fs        = require('fs');
const file      = process.argv[2];
const extension = process.argv[3];

fs.readdir(file, (err, data) => {
  if (err) throw err;
  data.filter((item) => {
    return item.split('.')[1] === extension;
  }).forEach((item) => {
    console.log(item);
  });
});
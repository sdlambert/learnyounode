const myModule  = require('./mymodule.js');
const dir       = process.argv[2];
const extension = process.argv[3];

myModule(dir, extension, (err, data) => {
  if (err)
    console.error('There was an error', err);

  data.forEach((file) => {
    console.log(file);
  });
});
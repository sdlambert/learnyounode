console.log(sumArgs(process.argv));

function sumArgs (args) {
  return args.slice(2).map((value) => {
    return Number(value);
  }).reduce((a, b) => {
    return a + b;
  });
}
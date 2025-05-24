const count = parseInt(process.argv[2]);

if (!isNaN(count) && count > 0) {
  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
} else {
  console.log('Missing number of occurrences');
}

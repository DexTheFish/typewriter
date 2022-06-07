const sentence = "hello there from lighthouse labs";

let delay = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50;
}
setTimeout(() => {
  process.stdout.write("\n")
}, delay);

//---------- older version of the exercise -------------------

// let delay = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//   }, delay);
//   delay += 50; // <= 1s delay to make it noticeable. Can dial it down later.
// }
// setTimeout(() => {
//   console.log('\n');
// }, delay + 50);
const spinner = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ']
let delay = 100;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    process.stdout.write(spinner[i]);
    i++;
  }, delay)
  delay += 200;
};

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ')
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ')
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ')
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ')
// }, 1700);
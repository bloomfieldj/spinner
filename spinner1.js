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


const animate = function(array){
  let timer = 0;
  for (const char of array) {   
    setTimeout(() => {
      process.stdout.write(`\r${char    }`)}, timer);
      timer += 200;  
    }
    setTimeout(() => {
      process.stdout.write('\n')}, timer);
}

const spinner = ["|", "/", "-", "\\", "|", "/", "-", "\\"]

animate(spinner);
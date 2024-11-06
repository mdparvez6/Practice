// Decreasing Counter using setInterval

let a = 3;
const interval = setInterval(abc, 1000);

function abc() {
  if (a < 0) clearInterval(interval);
  else {
    console.log(a);
    a--;
  }
}
 
// clearInterval does not immediately exit the function
// when a=-1 it executes the remaining function and prints -1 if we dont use else in the above code

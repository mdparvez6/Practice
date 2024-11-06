//Decreasing counter using setTimeOut
 
let a = 3;

function abc() {
  if (a < 0) return;
  console.log(a);
  a--;
  setTimeout(abc, 1000);
}

abc();

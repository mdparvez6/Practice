// clock

function abc() {
  let curtime = new Date().toLocaleTimeString();
  console.log(curtime);
}

setInterval(abc, 1000);

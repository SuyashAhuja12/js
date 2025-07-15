let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleDateString());

let createdate = new Date(2023, 0, 23);
console.log(createdate);
console.log(createdate.toLocaleString());

let mytimestamp = Date.now()
console.log(mytimestamp);
console.log(createdate.getTime());
console.log(Math.floor(Date.now()/1000));











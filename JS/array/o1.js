const myarr = [0, 2, 3, 4, 5]
console.log(myarr);
console.log(myarr[3]);

// array methods

myarr.push(5);
console.log(myarr);

myarr.pop(3);
console.log(myarr);

myarr.unshift(6);
console.log(myarr);

myarr.shift(6);
console.log(myarr);

console.log(myarr.includes(9));
console.log(myarr.indexOf(2));

const newarr = myarr.join();
console.log(myarr);
console.log(newarr);

// slice, splice

 console.log("A", myarr);
 const myn1 = myarr.slice(1, 3)
 console.log(myn1);
 console.log("b", myarr);

const myn2 = myarr.splice(1, 3);
console.log("c", myarr);
console.log(myn2);



const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel.push(dc);
console.log(marvel);
console.log(marvel[3][1]);

const all = marvel.concat(dc);
console.log(all);

const allnew = [...marvel, ...dc]
console.log(allnew)




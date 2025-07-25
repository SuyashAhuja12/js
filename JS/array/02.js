
const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

marvel.push(dc);

// console.log(marvel);
// console.log(marvel [3][1]);

// const allheros= marvel.concat(dc);
// console.log(allheros);

const all_new_heros = [...marvel, ...dc];
// console.log(all_new_heros);

const another_heros = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
const real_heros = another_heros.flat(Infinity)
console.log(real_heros);

console.log(Array.isArray("suyash"));
console.log(Array.from("suyash"));
console.log(Array.from({name: "suyash"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



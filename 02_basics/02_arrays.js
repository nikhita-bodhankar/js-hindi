const marvel_heros = ["Spderman", "thor","Ironman"]
const dc_heros = ["Shaktiman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const new_all_heros = [...marvel_heros, ...dc_heros]
// console.log(new_all_heros);

const another_Array = [1,2,3,4,[5,6,7],8,9,[6,7,[5,6]]]
// console.log(another_Array);

const real_another_Array = another_Array.flat(Infinity)
console.log(real_another_Array);

console.log(Array.isArray("Rani"));
console.log(Array.from("Rani"));
console.log(Array.from({name:"Rani"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));







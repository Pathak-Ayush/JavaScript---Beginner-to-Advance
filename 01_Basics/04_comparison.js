// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);



//data types should be same while comparison and 

console.log("2" > 1);
//string is automatically converted into number.
console.log("02" > 1);


//following conversions are confusing and should generally avoided.
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// === (strictly check the value)

console.log("2" === 2);
//^  collection of multiple items in single variable. resizable, mix of data types, array elements can't be accessed by giving index as string....//

//* Array-copy operation in js makes shallow copies i.e shares same reference point....
//* Deep copies do not share same reference point.....

const myArr = ["null", null, undefined, 0, 1, "arrays"]

console.table(myArr)
console.log(typeof myArr[0])

// Array methods
//1. Push
myArr.push("string2")
console.log(myArr);

//2. Pop
myArr.pop()
console.log(myArr);

//3. Shift ... remove first value
myArr.shift()
console.log(myArr);

//4. Add any value at index 0
myArr.unshift("blue", 0, undefined)
console.log(myArr);

//5. Join changes into string 
const Arr = myArr.join();
console.log(typeof Arr);

//* 6. Slice

const Arr1 = [1, 2, 3, 4, 5]
console.log("A ", Arr1);

const myn1 = Arr1.slice(1, 3)
console.log(myn1)
console.log("B ", Arr1);

//* 7. Splice == Manipulates the original Array
const myn2 = Arr1.splice(1, 3)
console.log(myn2)
console.log("C ", Arr1);


//^ Array inside Array

const animals = ["cow", "goat", "cat", "dog"]
const birds = ["Parrot", "dove", "Sparrow", "Swan"]

// *bad syntax
// animals.push(birds);
// console.log(animals[4][2]);

//* concat combines two or more arrays and return a new array

const allSpecies = animals.concat(birds);
console.table(allSpecies);
console.log(typeof allSpecies)

// const allNewSpecies = [...animals, ...birds]
// console.log(allNewSpecies);

//* flat => return single array if there are array inside array inside array 

const newArray = [2, 21, 24, 34, [4, 5, 6], 7, [6, 7, 8, ["apple", "pineapple", "pen"]]];
// const newAnotherArray = newArray.flat(depth of Array, generally infinity is given);
const newAnotherArray = newArray.flat(Infinity);
console.log(newAnotherArray);

console.log(Array.isArray("Panda")); // it is not array
console.log(Array.from("Panda")); // from converts anything in array

console.log(Array.from({name:"Panda"})); //imp incase of interview, if can't convert then it will give an empty array

let score1 = 100;
let score2 = 500;
let score3 = 400;


console.log(Array.of(score1, score2, score3));


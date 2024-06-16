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

//******************Memory in javascript */

//stack (primitive types) and heap (non-primitive)
// In stack get a value of decared variable or object
// In heap memory we get reference value for original variable or object, so any changes done will be to original var,

// stack (any changes will be done in copied value)
let myName = "Zor se bolo, Germany!" 

let anotherName = "Khaali 7 ghante ka to raasta hai." 
anotherName = "Khaali 7 ghnate ka raasta? Petrol kya tera baap bharega?"

console.log(myName);
console.log(anotherName)

//object  heap memory (reference  = any changes done will be in original value)

let user1 = {
    email: "johndoe@google.com",
    password: "iqwwdkh32e3"
}

let user2 = user1
user2.email = "abc@google.com"

console.log(user1.email);
console.log(user2.email);
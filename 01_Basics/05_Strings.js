const name = "winters"
const year = 1939

/* not a good way to concatinate
console.log(name + year);
*/

//string interpolation (you can add methods such as uppercase, lowercase etc)
console.log(`the ${name} of ${year} is when the war began`);


//NEW IS USED FOR OBJECT IN JS 
const gameName = new String(`Call Of Duty`);

console.log();
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(9));
console.log(gameName.indexOf('D'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.substring(-15, 5);
console.log(anotherString);


//trim is generally used in forms to remove whitespaces and new line character
const newStringOne = "   john davis  "
console.log(newStringOne);
console.log(newStringOne.trim());

//for URL's

const url = "https://google.com/brigade@49392box"

//replace anything in url
console.log(url.replace('@49392', '&'));

//find anything in URL
console.log(url.includes('google'));
console.log(url.includes('api'));

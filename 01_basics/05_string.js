const name = "Mayur" // DEcalearing the string
const count = 12

console.log(`My name is ${name} and my course count is ${count}`) //backtick string concatenation

const gameName = new String ('MayurU')
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('u'));

const newstring = gameName.substring(-8,4)
console.log(newstring);

const anotherstring = gameName.slice(-4,6)
console.log(anotherstring);

const newStringOne = "    Maxxton    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="www.mayurUnin.com/mayur%20uniyal"

console.log(url.replace('%20','_'));

console.log(url.search('com'));

console.log(url.includes('uniyal1'))

const stringSplit = "how-are-you-my-dear-?"
console.log(stringSplit.split('-'));
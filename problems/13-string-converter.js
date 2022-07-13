/***********************************************************************
Write a function `stringConverter(string)` that will intake a
string as an argument and returns an object representing the count of each
character in the string. **Hint:** don't forget you can check if a key is present
in an object by using `obj[key] === undefined`.

Examples:

console.log(stringConverter("apple")); // => {a: 1, p: 2, l: 1, e: 1}
console.log(stringConverter("banana")); // => {b: 1, a: 3, n: 2}
console.log(stringConverter("raccoon")); // => {r: 1, a: 1, c: 2, o: 2, n: 1}
***********************************************************************/

function stringConverter(string) {
  // returns an object representing the ocunt of each character in the string
  let arrString = string.split('')
  let obj = {};
  // create obj where each letter is a key
  arrString.forEach(key => {
  // check if each letter exists as key in obj, if not, assign key with 1
  if (obj[key] === undefined) {
    obj[key] = 1
  }
  // if key exists, add 1 to value
  else {
    obj[key]++
  }
  })
  return obj;

}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = stringConverter;

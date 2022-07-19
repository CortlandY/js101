let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

function findExclamationMark(string) {
  let lastCharIndex = string.length - 1;
  if (string[lastCharIndex] === '!') {
    return true;
  } else return false;
}

console.log(findExclamationMark(str1));
console.log(findExclamationMark(str2));

// or use built in endsWith() function lol
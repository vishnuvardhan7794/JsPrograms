// Palindrom /[\W_]/g or /[^A-Za-z0-9]/g
function palindrome(word) {
  let re = /[^A-Za-z0-9]/g;
  const newWord = word.toLowerCase().replace(re, '');
  const reversWord = newWord.split('').reverse().join('');
  return newWord === reversWord;
}

console.log('isPalindrom', palindrome('dfsd'));

// title Case
function titleCase(sentence) {
  const words = sentence.split(' ');
  const newFormat = [];
  for (let i = 0; i < words.length; i++) {
    let firstLatter = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    newFormat.push(firstLatter);
    console.log('firstLatter', firstLatter, words[i].slice(1));
  }
  console.log('newFormat', ...newFormat);
}

// titleCase("I'm a little tea pot");

// logenst word in sentence
var strSplit = 'The quick brown fox jumped over the lazy dog'.split(' ');
let longestWordIndex = 0;
let wordLength = 0;
for (let i = 0; i < strSplit.length; i++) {
  if (wordLength < strSplit[i].length) {
    wordLength = strSplit[i].length;
    longestWordIndex = i;
  }
}

// Write your code below


const isPalindrome = word => {
  const normalizedWord = word.toLowerCase();
  const reversedWord = normalizedWord.split('').reverse().join('');
  return normalizedWord === reversedWord;
};

console.log(isPalindrome("a"));
console.log(isPalindrome("noon"));
console.log(isPalindrome("hello"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("racecar"));

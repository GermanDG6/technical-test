const isPalindrome = (text) => {
  let palindrome = text.split("").reverse().join("");
  return palindrome === text ? true : false;
};

console.log(isPalindrome("alberto"));

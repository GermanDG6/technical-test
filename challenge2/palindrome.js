const isPalindrome = (text) => {
  let palindrome = text.split("").reverse().join("");
  return palindrome === text;
};

module.exports = isPalindrome;

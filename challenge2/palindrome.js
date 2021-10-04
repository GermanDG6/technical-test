const isPalindrome = (text) => {
  let palindrome = text.split("").reverse().join("");
  return `Is ${text} a palindrome? ${palindrome === text}`;
};

console.log(isPalindrome("ana"));

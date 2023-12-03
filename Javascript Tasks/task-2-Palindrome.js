function isPalindrome(str) {
  const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  const reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;
}

const userInput = prompt("Enter a word or phrase:");

if (isPalindrome(userInput)) {
  Swal.fire({
    title: "Palindrome!",
    text: "It's a palindrome!",
    icon: "success",
  });
} else {
  Swal.fire({
    title: "Not a Palindrome!",
    text: "It's not a palindrome.",
    icon: "error",
  });
}

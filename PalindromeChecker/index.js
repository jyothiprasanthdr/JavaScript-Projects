const input = document.getElementById("input");

function reverseStr(str) {
  return str.split("").reverse().join("");
}

function check() {
  const value = input.value;
  const reversedValue = reverseStr(value);

  if (value === reversedValue) {
    alert("Valid Palindrome");
  } else {
    alert("Not a Palindrome");
  }

  input.value = "";
}

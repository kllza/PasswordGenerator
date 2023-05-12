const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = '!@#$%^&*()_-+=[]{}\\|:;"<>,.?/~`';

const generatePassword = (length, lowercase, uppercase, numbers, symbols) => {
  let chars = "";
  if (lowercase) chars += lowercaseChars;
  if (uppercase) chars += uppercaseChars;
  if (numbers) chars += numberChars;
  if (symbols) chars += symbolChars;

  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const form = document.getElementById("password-form");
const passwordInput = document.getElementById("password");
const lowercaseCheckbox = document.getElementById("lowercase");
const uppercaseCheckbox = document.getElementById("uppercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generateButton = document.getElementById("generate");

generateButton.addEventListener("click", (event) => {
  event.preventDefault();
  const length = parseInt(document.getElementById("length").value);
  const lowercase = lowercaseCheckbox.checked;
  const uppercase = uppercaseCheckbox.checked;
  const numbers = numbersCheckbox.checked;
  const symbols = symbolsCheckbox.checked;
  const password = generatePassword(
    length,
    lowercase,
    uppercase,
    numbers,
    symbols
  );
  passwordInput.value = password;
});

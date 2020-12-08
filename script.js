var generateBtn = document.querySelector("#generate");

document.getElementById("generate").onclick = function () {
  alert("Whazzuuuuup! Are you ready to generate your totally random password?");
};

document.getElementById("generate").addEventListener("click", function () {
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var uppercaseSplit = uppercase.split("");
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var lowercaseSplit = lowercase.split("");
  var specialCharacters = "!@#$%^&*()_+<>?:";
  var specialCharactersSplit = specialCharacters.split();
  var numbers = "123456789";
  var numbersSplit = numbers.split("");
  var showPassword = document.getElementById("password");
  var selectEl = "";
  var password = "";
  var userCount = prompt(
    "How many characters would you like your password to have? Note: It must be between 8 and 128"
  );

  if (userCount < 8 || userCount > 128) {
    alert("Password must be between 8 and 128 characters.");
    return;
  }

  var numConfirm = confirm("Do you want to include numbers in your password?");

  var lowerConfirm = confirm(
    "Do you want to include lowercase letters in your password?"
  );

  var upperConfirm = confirm("How about uppercase letters?");

  var specialConfirm = confirm("How do you feel about special characters?");

  var verify = 0;

  if (
    numConfirm == true ||
    lowerConfirm == true ||
    upperConfirm == true ||
    specialConfirm == true
  ) {
    verify += 1;
  }

  if (verify == 0) {
    alert(
      "You must select at least one character type for your criteria. Nice try though."
    );
    return;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
function generatePWD() {
  for (var i = 0; i <= length; i++) {
    password =
      password +
      selectEl.charAt(
        Math.floor(Math.random() * Math.floor(selectEl.length - 1))
      );
  }
}

if (lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
  selectEl = lowercase;
  generatePWD();
} else if (lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {
  selectEl = lowercase + uppercase;
  generatePWD();
} else if (lowerConfirm && upperConfirm && numberConfirm && !specialConfirm) {
  selectEl = lowercase + uppercase + numbers;
  generatePWD();
} else if (!lowerConfirm && upperConfirm && numberConfirm && !specialConfirm) {
  selectEl = uppercase + numbers;
  generatePWD();
} else if (lowerConfirm && upperConfirm && numberConfirm && specialConfirm) {
  selectEl = lowercase + uppercase + numbers + specialCharacters;
  generatePWD();
} else if (!lowerConfirm && upperConfirm && numberConfirm && specialConfirm) {
  selectEl = uppercase + numbers + specialCharacters;
  generatePWD();
} else if (!lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) {
  selectEl = numbers + specialCharacters;
  generatePWD();
} else if (!lowerConfirm && !upperConfirm && !numberConfirm && specialConfirm) {
  selectEl = specialCharacters;
  generatePWD();
} else if (lowerConfirm && upperConfirm && !numberConfirm && specialConfirm) {
  selectEl = lowercase + uppercase + specialCharacters;
  generatePWD();
} else if (lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) {
  selectEl = lowercase + numbers;
  generatePWD();
} else if (!lowerConfirm && !upperConfirm && numberConfirm && !specialConfirm) {
  selectEl = numbers;
  generatePWD();
} else if (!lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {
  selectEl = uppercase;
  generatePWD();
} else if (lowerConfirm && !upperConfirm && !numberConfirm && specialConfirm) {
  selectEl = lowercase + specialCharacters;
  generatePWD();
} else if (!lowerConfirm && upperConfirm && !numberConfirm && specialConfirm) {
  selectEl = uppercase +specialCharacters ;
  generatePWD();
}
document.getElementById('password').innerHTML = password;
});

// Write password to the #password input


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

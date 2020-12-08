var generateBtn = document.querySelector("#generate");
// var displayPassword = document.querySelector("#password");

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

  var lowerConfirm = confirm("Do you want to include lowercase letters in your password?");

  var upperConfirm = confirm("How about uppercase letters?");

  var specialConfirm = confirm("Do you want to include numbers in your password?");

  var verify = 0;

  if (numConfirm == true || lowerConfirm == true || upperConfirm == true || specialConfirm == true) {
    verify += 1;
  }

  if (verify == 0) {
    alert("You must select at least one character type for your criteria. Nice try though.");
    return;
  }
});
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
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
    selectEl = lowerase;
    generatePWD();
  } else if (lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {
    selectEl = lowerase + upperase;
    generatePWD();
function generatePWD() {
      for (var i = 0; i <= length; i++) {
        password = password + selectEl.charAt(Math.floor(Math.random() * Math.floor(selectEl.length - 1)));
      }
    }
  
    if (lowerConfirm && !upperConfirm && !numberConfirm && !specialConfirm) {
      selectEl = lowerase;
      generatePWD();
    }

    else if (lowerConfirm && upperConfirm && !numberConfirm && !specialConfirm) {
      selectEl = lowerase + upperase;
      generatePWD();
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
    }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



// document.getElementById('password').addEventListener("click", writePassword);

var generateButton = document.querySelector("#generate");

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
    alert("You must select at least one character type for your criteria. Nice try though.")
  }
});

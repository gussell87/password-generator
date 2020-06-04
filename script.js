// Assignment Code
var generateBtn = document.querySelector("#generate");

var needLen = ;
var needChar = ;
var userLen = ;
var needLow = ;
var needUpp = ;
var needSpec = ;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



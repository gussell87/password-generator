// Assignment Code
var passwordE1 = document.getElementById('password');
var lengthE1 = document.getElementById('length');
var lowerE1 = document.getElementById('lower');
var upperE1 = document.getElementById('upper');
var numberE1 = document.getElementById('number');
var specialsE1 = document.getElementById('specials');
var generateE1 = document.getElementById('generate');
var generateBtn = document.querySelector("#generate");

//Array that takes in the above arrays as they are selected. Password characters chosen from here.
var values = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    specials: getRandomSpecials
};



// Generate password function
function generatePassword(lower, upper, numbers, specials, userLen) {

    var userLen = prompt("Choose password character length (8-128 characters)");
    var intUserLen = parseInt(userLen);

    // Boolean values
    var hasLower = confirm("Do you want your password to include lower case letters?");
    var hasUpper = confirm("Do you want your password to include upper case letters?");
    var hasNumber = confirm("Do you want your password to include numers?");
    var hasSpecials = confirm("Do you want your password to include special characters?");

    let generatedPassword = "";
    var typesCount = lower + upper + numbers + specials;
    const typesArr = [{ lower }, { upper }, { numbers }, { specials }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return 'I need some characters to into the password';
    }

    for (var i = 0; i < intUserLen; i += typesCount) {
        typesArr.forEach(type => {
            var valuesName = Object.keys(type)[0];

            generatedPassword += values[valuesName]();
        });
    }
    console.log(generatedPassword);
    return generatedPassword;
}

//build arrays of random characters
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecials() {
    var specials = "!@#$%^&*()_+".split("");
    return specials[Math.floor(Math.random() * specials.length)];
}

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
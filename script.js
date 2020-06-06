// Assignment Code
var passwordE1 = document.getElementById('password');
var lengthE1 = document.getElementById('length');
var lowerE1 = document.getElementById('lower');
var upperE1 = document.getElementById('upper');
var numberE1 = document.getElementById('number');
var specialsE1 = document.getElementById('specials');
var generateE1 = document.getElementById('generate');
var generateBtn = document.querySelector("#generate");





//build arrays of random characters
// function getRandomLower() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }

// function getRandomUpper() {
//     return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
// }

// function getRandomNumber() {
//     return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
// }

// function getRandomSpecials() {
//     var specials = "!@#$%^&*()_+".split("");
//     return specials[Math.floor(Math.random() * specials.length)];
// }

var specials = "!@#$%^&*()_+".split("");
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");

// Generate password function
function generatePassword(lowerCase, upperCase, numbers, specials, userLen) {
    var userLen = prompt("Choose password character length (8-128 characters)");
    if (userLen < 8) {
        alert("That password is too short. Please choose 8-128 characters")
    }
    else if (userLen > 128) {
        alert("That password is too long. Please choose 8-128 characters")
    }
    else {
        alert("Your password will be " + userLen + " characters")
    }

    var intUserLen = parseInt(userLen);

    var values = [];

    // Boolean values
    var hasLower = confirm("Do you want your password to include lower case letters?");
    if (hasLower === true) {
        alert("Your password will include lower case characters")
    }
    else {
        alert("Your password will not include lower case characters")
    }
    var hasUpper = confirm("Do you want your password to include upper case letters?");
    if (hasUpper === true) {
        alert("Your password will include upper case characters")
    }
    else {
        alert("Your password will not include upper case characters")
    }
    var hasNumber = confirm("Do you want your password to include numers?");
    if (hasNumber === true) {
        alert("Your password will include numbers")
    }
    else {
        alert("Your password will not include numbers")
    }
    var hasSpecials = confirm("Do you want your password to include special characters?");
    if (hasSpecials === true) {
        alert("Your password will include special characters")
    }
    else {
        alert("Your password will not include special characters")
    }

    //Array that takes in the below arrays as they are selected. Password characters chosen from here.
    // var values = {
    //     lower: getRandomLower,
    //     upper: getRandomUpper,
    //     number: getRandomNumber,
    //     specials: getRandomSpecials
    // };

    let generatedPassword = "";
    var typesCount = lowerCase + upperCase + numbers + specials;

    // const typesArr = [{ lower }, { upper }, { numbers }, { specials }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return 'I need some characters to into the password';
    }

    if (hasLower === true) {
        values.push(lowerCase);
    }

    else if (hasUpper === true) {
        values.push(upperCase);
    }

    else if (hasNumber === true) {
        values.push(numbers);
    }

    else if (hasSpecials === true) {
        values.push(specials);
    }

    for (var i = 0; n = values.length; i < intUserLen, i++) {
        password += values.charAt(Math.floor(Math.random() * n));
        generatedPassword += values[valuesName]();
    };
    return generatedPassword;

}


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
var passwordE1 = document.getElementById('password');
var lengthE1 = document.getElementById('length');
var lowerE1 = document.getElementById('lower');
var upperE1 = document.getElementById('upper');
var numberE1 = document.getElementById('number');
var specialsE1 = document.getElementById('specials');
var generateE1 = document.getElementById('generate');
var generateBtn = document.querySelector("#generate");


//empty array that takes in the above arrays as they are selected. Password characters chosen from here.
var values = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    specials: getRandomSpecials
};

// Generate password function
function generatePassword() {

    var userLen = prompt("Choose password character length (8-128 characters)");
    var charInput = prompt("What characters do you need to include? Type 'l' for lower case, 'u' for upper case, 'n' for numeric and 's' for special");
    var intUserLen = parseInt(userLen);
    var lowCharInput = charInput.toLowerCase();

    // Boolean values
    var hasLower = charInput.includes("l");
    var hasUpper = charInput.includes("u");
    var hasNumber = charInput.includes("n");
    var hasSpecials = charInput.includes("s");

    let generatedPassword = "";

    const typesArr = [{ lower }, { upper }, { numbers }, { specials }].filter(item => Object.values(item)[0]);

    var typesCount = lower + upper + numbers + specials;

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
    //build arrays of random characters
}
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
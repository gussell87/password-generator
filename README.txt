
Password Generator Project
Objective: To build an application that will build a random password for the user of their desired length, limited to 8-128 characters. It will include their choice of lower case letters, upper case letters, number and special characters.
They will click generate password, and then receive a series of prompts and confirmations so they can enter their preferences.
App: https://gussell87.github.io/password-generator/
Repository: https://github.com/gussell87/password-generator


//Psuedo-code the project
Page currently looks as it needs to. Prompts are all that are needed.
USER CLICKS BUTTON:
* Prompt: Desired password length (8-128 characters)
If between 8 & 128
o (Alert: Your password will be x characters)
If outside range
o Alert: Please select a number between 8-128
If characters to include is selected:
* Confirm: do you want to include lower case?
If yes:
o Confirm they will be included
o Push lower case array to values array
If no:
o Confirm they won’t be used.

* Confirm: do you want to include upper case?
If yes:
o Confirm they will be included
o Push upper case array to values array
If no:
o Confirm they won’t be used.

* Confirm: do you want to include numbers?
If yes:
o Confirm they will be included
o Push number array to values array
If no:
o Confirm they won’t be used.

* Confirm: do you want to include special characters?
If yes:
o Confirm they will be included
o Push specials array to values array
If no:
o Confirm they won’t be used.
Generate random password using characters from values array.
* Display new password in text box.

Variables needed:
One each for characters to use, Boolean.
Length. userLen – needs to be converted to integer.
Values. Begins blank and has arrays of characters added when they are chosen by user.

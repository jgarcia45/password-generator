//Defining Password
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCase = "0123456789"
var specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

//Generating Password
function generatePassword() {
  //New Password
  var passwordGenerated = "";
  var casesChosen = "";

  //Asking the User for the Length of the Password and converting the password into an integer
  var passwordLength = window.prompt("Choose a lenght between 8 and 128");
  passwordLength = parseInt(passwordLength);

  //Checking if the password is between 8 and 128
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128!");
    return;
  }

  var lowercaseConfirmation = window.confirm("Would you like a lower case in the password?");
  var uppercaseConfirmation = window.confirm("Would you like a upper case in the password?");
  var numericalcaseConfirmation = window.confirm("Would you like numbers in the password?");
  var specialcaseConfirmation = window.confirm("Would you like special characters in the password?");

  //Validates and ensures that one character type should be selected
  if (!lowercaseConfirmation && !uppercaseConfirmation && !numericalcaseConfirmation && !specialcaseConfirmation) {
    window.alert("Must choose a Character Type!");
  } else if (lowercaseConfirmation && uppercaseConfirmation && numericalcaseConfirmation && specialcaseConfirmation) {
    casesChosen = lowerCase + upperCase + numberCase + specialCharacters;
  } else if (lowercaseConfirmation && uppercaseConfirmation && numericalcaseConfirmation) {
    casesChosen = lowerCase + upperCase + numberCase;
  } else {
    casesChosen = lowerCase;
  }

  //Random Pasword
  for (i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * casesChosen.length);
    passwordGenerated += casesChosen.substring(randomPassword, randomPassword + 1);
  }

  return passwordGenerated;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
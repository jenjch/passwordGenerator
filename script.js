var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";

// Can only be numbers. Else message "You must enter a number!".
// Has to be between 8 and 128 characters. Else message "Password length must be between 128 characters."
function checkNum (num){
    return /^[0-9.,]+$/.test(num)
}
document.querySelector(".generate-pw").onclick = function(event) {
  var charLength = prompt(
    "How many characters would you like your password to contain?"
  );
//   console.log(charLength);
  var convertedNumber = parseInt(charLength);
//   console.log(convertedNumber);
  if (!checkNum (convertedNumber)) {
    alert("You must enter a number!");
    charLength = prompt(
      "How many characters would you like your password to contain?"
    );
    } else if (charLength < 8 || charLength > 128) {
    alert("Password must be between 8 and 128 characters!");
    charLength = prompt(
      "How many characters would you like your password to contain?"
    );
    } else {
    var confirmSym = confirm("Click OK to confirm including special characters.");
    var confirmNum = confirm("Click OK to confirm including numbers.");
    var confirmLower = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpper = confirm("Click OK to confirm including uppercase characters.");
  }
};
// if at least one is true, then generate password. Need to have Or's?
// Else message "Must select at least once character type."


// Other Notes
// How to continue to prompt the appropriate error message and "How many characters wuld you like your password to contain?" if the entry continues to be incorrect?
// Use Math.floor, Math.random, charAt to randomize char/num/sym
// Do something to concatenate the values to a complete password
// First the "Generate Password" button needs to be clicked before running the prompts and the confirms
// Display password output on page
// Reset if click "Generate Password" again?
// Bonus: have copy to clipboard option
// Bonus: display previously generated password

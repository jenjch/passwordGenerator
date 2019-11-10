var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~\"";

var outputPwd = document.getElementById("outputPwd");

function checkNum(num){
    return /^[0-9.,]+$/.test(num);
};
document.querySelector(".generate-pw").addEventListener("click", generatePassword);

function generatePassword(event) {
    var charLength = prompt("How many characters would you like your password to contain?");
    var convertedNumber = parseInt(charLength);

if (!checkNum (convertedNumber)) {
    alert("You must enter a number!");
    
    generatePassword();
    return;

} else if (charLength < 8 || charLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
    
    generatePassword();
    return;

} else {
    var confirmSym = confirm("Click OK to confirm including special characters.");
    var confirmNum = confirm("Click OK to confirm including numbers.");
    var confirmLower = confirm("Click OK to confirm including lowercase characters.");
    var confirmUpper = confirm("Click OK to confirm including uppercase characters.");

        if (confirmSym || confirmNum || confirmLower || confirmUpper) {
            var characters = '';
            if (confirmSym) characters += symbol;
            if (confirmNum) characters += number;
            if (confirmLower) characters += lowerChar;
            if (confirmUpper) characters += upperChar;
            var password = getPassword(convertedNumber, characters);
    
            outputPwd.value = getPassword(convertedNumber, characters);

        } else {
            alert("You must select at least one character type!");
            
            generatePassword();
            return;
        }
    };
};

function getPassword (l, characters) {
    var pwd = '';
    for (var i=0; i<l; i++) {
        pwd += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pwd;
};

function myFunction() {
    var copyText = document.getElementById("outputPwd");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the password: " + copyText.value);
}

// Other Notes
// Bonus: have copy to clipboard option
// See if you can display previously generated password
// regex to check if prompt is a number

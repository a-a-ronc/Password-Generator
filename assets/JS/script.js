// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Tell the user to select a character length between the range of 8 and 128 characters
  var passwordLength = parseInt(prompt("Enter the desired password length (between 8 and 128 characters):"));

  // if statement used to verify that the length of the password is between 8 and 128 characters
  // it also verifies if the value entered is (NaN) not a number; if those constraints aren't followed
  //then the alert is shown
  if ((isNaN(passwordLength)) || (passwordLength < 8) || (passwordLength > 128)) {
    alert("Please enter a valid password length.");
    return;
  }

  // Each variable will ask the user to either include a certain type of character or not; the confirm command creates
  // a boolean variable so true or false
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumbers = confirm("Include numbers?");
  var includeSpecial = confirm("Include special characters?");

  // The user needs to select at least one character type in order to create a password
  // the if statement produces an error if ALL the variable types are false; || combines all the conditions and returns
  // true if at least one of the conditions is true; if all the conditions are false then it returns false; the exclamation 
  // point negates that so the opposite is true
  if (!(includeLowercase || includeUppercase || includeNumbers || includeSpecial)){
    alert("Please select at least one character type.");
    return;
  }

  // The character types had to be created in a variable in order to generate a random password
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var number = "0123456789";
  var special = "!@#$%^&*()_-+=<>?";

// A blank variable called selectedchars was created; this variable will be used to generate a random password
// essentially the selectedChars variable will include all the parameters selected by the user and add them into the
//blank variable; it runs through all if statements to include the strings of all the character types specified by the user
  var selectedChars = "";
// += will concatenate the variables 
  if (includeLowercase) selectedChars += lowercase;
  if (includeUppercase) selectedChars += uppercase;
  if (includeNumbers) selectedChars += number;
  if (includeSpecial) selectedChars += special;
  
  // Created a blank variable to manipulate later
  var password = "";

  //Created a for loop to run for as long as the length of the password indicated by the user; i determine the number of 
  // iterations the for loop needs to run to complete the password and i++ is what determines incrementation for the i 
  // variable; so after every loop it adds one to i until it has reached the length of the password
  for (var i = 0; i < passwordLength; i++) {
    //this one took forever to figure out; math.random produces a number greater than or equal to zero and less than one, not
    //including one; the length of selectedchars is a minimum of 10 characters and a maximum of 79 characters; this produces
    //a random floating number; this floating number determines the character location along the string; floor rounds the 
    //floating number down and then that random character is stored in the variable random
    var random = Math.floor(Math.random() * selectedChars.length);
    //not going to lie I had to google the next line; it accessed the speciofic character from selectedChars specified by the 
    //random variable; the charAtmethod retrieves the character from the index within the string selectedChars
    password += selectedChars.charAt(random);
  }

  return password;
}

// Write password to the #password textarea
function writePassword() {
  var password = generatePassword();
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





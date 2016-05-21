// // request phone number from user
var phoneNum = prompt('Please enter your ###-###-####');

// // Test submission for 
alert (phoneNum.charAt(3) === "-" && phoneNum.charAt(7) === "-");

// // Request Date of Birth
var dob = prompt('Please entered your Date of Birth MM/DD/YEAR');
console.log(dob.charAt(2) === "/" && dob.charAt(5) === "/");

// // Request Postal code
var zipcode = prompt("Please enter your zipcode");
console.log(zipcode.length == 5 || zipcode.charAt(5) === "-");

// // Please enter at state abbreviation
var state = prompt("What is your home state's abbreviation");
console.log(state.length === 2 && state === state.toUpperCase());

// Confirm marriage status
var marriage = prompt("Are you married?");
console.log(marriage.toLowerCase() == "yes" || marriage.toLowerCase() == "no");
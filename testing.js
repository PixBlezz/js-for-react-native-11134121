// main.js

const { processArray, formatArrayStrings } = require('./arrayManipulation');
const { createUserProfiles } = require('./userInfo');

// Step 1: Process the array of numbers
const numbers = [1, 2, 3, 4, 5];
const processedNumbers = processArray(numbers);
console.log(processedNumbers); // Output: [3, 4, 9, 16, 15]

// Step 2: Format the array of strings based on processed numbers
const strings = ["sammy", "is", "very", "good", "boy"];
const formattedStrings = formatArrayStrings(strings, processedNumbers);
console.log(formattedStrings); // Output: ["sammy", "IS", "very", "GOOD", "boy"]

// Step 3: Create user profiles
const originalNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const userProfiles = createUserProfiles(originalNames, formattedStrings);
console.log(userProfiles);


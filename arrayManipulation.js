// Task 1: processArray function
function processArray(numbers) {
    return numbers.map(num => {
        if (num % 2 === 0) {
            return num * num; // Square the even number
        } else {
            return num * 3; // Triple the odd number
        }
    });
}
// Task 2: formatArrayStrings function
function formatArrayStrings(strings, numbers) {
    return strings.map((str, index) => {
        if (numbers[index] % 2 === 0) {
            return str.toUpperCase(); // Capitalize the entire string
        } else {
            return str.toLowerCase(); // Convert the string to lowercase
        }
    });
}
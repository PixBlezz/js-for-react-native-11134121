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
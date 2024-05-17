function createUserProfiles(names, modifiedNames) {
    if (names.length !== modifiedNames.length) {
        throw new Error("The lengths of names and modifiedNames arrays must be equal.");
    }

    return names.map((name, index) => {
        return {
            id: index + 1, // Auto-incremented ID starting from 1
            originalName: name,
            modifiedName: modifiedNames[index]
        };
    });
}

// Example usage
const originalNames = ["Alice", "Bob", "Charlie", "Diana", "Eve"];
const processedNumbers = [3, 4, 9, 16, 15]; // This would be the result from processArray in Task 1
const formattedNames = ["alice", "BOB", "charlie", "DIANA", "eve"]; // This would be the result from formatArrayStrings in Task 2

const userProfiles = createUserProfiles(originalNames, formattedNames);
console.log(userProfiles);
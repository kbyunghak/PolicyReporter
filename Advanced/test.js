const modThree_advanced = require('./index');

function runTests() {
    const testCases = [
        // Valid input test cases
        { input: "110", expected: 0 },  // 6 % 3 = 0
        { input: "111", expected: 1 },  // 7 % 3 = 1
        { input: "1010", expected: 1 }, // 10 % 3 = 1
        { input: "1111", expected: 0 }, // 15 % 3 = 0
        { input: "0", expected: 0 },    // 0 % 3 = 0
        { input: "1", expected: 1 },    // 1 % 3 = 1
        { input: "10", expected: 2 },   // 2 % 3 = 2
        { input: "11", expected: 0 },   // 3 % 3 = 0
        { input: "100", expected: 1 },  // 4 % 3 = 1

        // Invalid input test cases
        { input: "", expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: "2", expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: "10201", expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: "abc", expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: "  ", expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: null, expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
        { input: undefined, expected: "Input must be a non-empty binary string (containing only '0' and '1')." },
    ];

    let allPassed = true;

    testCases.forEach(({ input, expected }) => {
        try {
            const result = modThree_advanced(input);
            if (result !== expected) {
                console.error(`Test failed for input: "${input}". Expected: ${expected}, Got: ${result}`);
                allPassed = false;
            } else {
                console.log(`Test passed for input: "${input}". Output: ${result}`);
            }
        } catch (error) {
            if (error.message === expected) {
                console.log(`Test passed for invalid input: "${input}". Error: ${error.message}`);
            } else {
                console.error(`Test failed for invalid input: "${input}". Expected error: "${expected}", Got: "${error.message}"`);
                allPassed = false;
            }
        }
    });

    if (allPassed) {
        console.log("All tests passed successfully!");
    } else {
        console.error("Some tests failed. Review the errors above.");
    }
}

runTests();

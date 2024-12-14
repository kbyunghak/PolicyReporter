/**
 * Function to determine the remainder when a binary string is interpreted as 
 * a decimal number and divided by 3, using a finite state machine.
 * @param {string} input - A non-empty binary string (containing only '0' and '1').
 * @returns {number} The remainder (0, 1, or 2) of the binary number divided by 3.
 * @throws {Error} If the input is not a valid non-empty binary string.
 */
function modThree_standard(input) {
    // Validate input: must be a non-empty binary string
    if (!input || !/^[01]+$/.test(input)) {
        throw new Error("Input must be a non-empty binary string (containing only '0' and '1').");
    }

    // Initial state: representing remainder 0
    let state = "S0";

    // Define state transition rules
    const transitions = {
        S0: { "0": "S0", "1": "S1" }, // From state S0: '0' -> S0, '1' -> S1
        S1: { "0": "S2", "1": "S0" }, // From state S1: '0' -> S2, '1' -> S0
        S2: { "0": "S1", "1": "S2" }, // From state S2: '0' -> S1, '1' -> S2
    };

    // Process each character in the input string
    for (const char of input) {
        state = transitions[state][char]; // Transition to the next state
    }

    // Map final state to the corresponding output (remainder)
    const stateToOutput = {
        S0: 0, // State S0 represents a remainder of 0
        S1: 1, // State S1 represents a remainder of 1
        S2: 2, // State S2 represents a remainder of 2
    };

    return stateToOutput[state]; // Return the calculated remainder
}

/**
 * Unit testing function to validate the correctness of the modThree_standard function.
 * Includes valid and invalid input test cases.
 * Logs the result of each test case and reports overall test success.
 */
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
        { input: "", expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Empty string
        { input: "2", expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Contains invalid character
        { input: "10201", expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Mixed binary and invalid characters
        { input: "abc", expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Non-binary string
        { input: "  ", expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Whitespace
        { input: null, expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Null input
        { input: undefined, expected: "Input must be a non-empty binary string (containing only '0' and '1')." }, // Undefined input
    ];

    let allPassed = true;
    let invalidTestsFailed = true;

    testCases.forEach(({ input, expected }) => {
        try {
            const result = modThree_standard(input);
            if (result !== expected) {
                console.error(`Test failed for input: "${input}". Expected: ${expected}, Got: ${result}`);
                allPassed = false;
            } else {
                console.log(`Test passed for input: "${input}". Output: ${result}`);
            }
        } catch (error) {
            if (error.message === expected) {
                console.log(`Test passed for invalid input: "${input}". Error: ${error.message}`);
                invalidTestsFailed = false; // At least one invalid input test passed
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

    if (invalidTestsFailed) {
        console.error("All invalid input test cases failed. Please review and complete validation for invalid inputs.");
    }
}

// Execute the unit tests
runTests();

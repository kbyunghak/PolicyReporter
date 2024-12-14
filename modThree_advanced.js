// Create FiniteStateMachine.js
class FiniteStateMachine {
    //Create a FSM machine
    //Validation for FSM Configuration
    //Run the FSM with a given input string
    //throw error message
}

//ModThreeFSM


/**
 * Computes the remainder when a binary string is interpreted as a decimal number and divided by 3.
 * @param {string} input - A binary string (only '0' and '1').
 * @returns {number} The remainder (0, 1, or 2).
 */
function modThree_advanced(input) {
    //validate input
    //return remainder    
}

//Test cases
function runTest() {
    let allPassed = true;

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

    if (allPassed) {
        console.log("All tests passed successfully!");
    } else {
        console.error("Some tests failed. Review the errors above.");
    }
}

//Run all tests
runTest();
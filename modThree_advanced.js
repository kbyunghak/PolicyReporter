// Create FiniteStateMachine.js
class FiniteStateMachine {
    /**
     * Create a FSM machine
     * @param {Object} config - Configuration for the FSM.
     * @param {Array<string>} config.states - List of all possible states.
     * @param {Array<string>} config.alphabet - List of valid input symbols.
     * @param {string} config.initialState - The starting state.
     * @param {Array<string>} config.finalStates - List of accepting states.
     * @param {Object} config.transitions - Transition rules as nested objects: { state: { input: nextState } }.
     */
    constructor({ states, alphabet, initialState, finalStates, transitions }) {
        this.states = new Set(states);
        this.alphabet = new Set(alphabet);
        this.initialState = initialState;
        this.finalStates = new Set(finalStates);
        this.transitions = transitions;

        // Validate FSM configuration
        if (!this.states.has(this.initialState)) {
            this._throwError(`Initial state "${this.initialState}" is not in the list of states.`);
        }

        for (const [state, inputs] of Object.entries(this.transitions)) {
            if (!this.states.has(state)) {
                this._throwError(`Transition defined for undefined state "${state}".`);
            }
            for (const input of Object.keys(inputs)) {
                if (!this.alphabet.has(input)) {
                    this._throwError(`Invalid input "${input}" in transitions. Allowed inputs: ${[...this.alphabet].join(", ")}.`);
                }
            }
        }

        for (const state of this.states) {
            const stateTransitions = this.transitions[state] || {};
            for (const symbol of this.alphabet) {
                if (!(symbol in stateTransitions)) {
                    this._throwError(`State "${state}" is missing a transition for input "${symbol}".`);
                }
            }
        }
    }
    
    /**
     * Run the FSM with a given input string and returns the final state.
     * @param {string} input - The input string (sequence of symbols).
     * @param {boolean} debug - Enable verbose logs for debugging.
     * @returns {string} The final state after processing the input.
     */
    run(input, debug = false) {
        let currentState = this.initialState;

        for (const symbol of input) {
            if (!this.alphabet.has(symbol)) {
                this._throwError(`Invalid input symbol "${symbol}".`);
            }
            const nextState = this.transitions[currentState][symbol];
            if (debug) {
                console.log(`Transition: ${currentState} --(${symbol})--> ${nextState}`);
            }
            currentState = nextState;
        }

        return currentState;
    }

     /**
     * Utility method for throwing consistent error messages.
     * @param {string} message - The error message.
     */
    _throwError(message) {
        throw new Error(`[FSM Error]: ${message}`);
    }
}

//ModThreeFSM
const modThreeFSM = new FiniteStateMachine({
    states: ["S0", "S1", "S2"],
    alphabet: ["0", "1"],
    initialState: "S0",
    finalStates: ["S0", "S1", "S2"],
    transitions: {
        S0: { "0": "S0", "1": "S1" },
        S1: { "0": "S2", "1": "S0" },
        S2: { "0": "S1", "1": "S2" },
    },
});

/**
 * Computes the remainder when a binary string is interpreted as a decimal number and divided by 3.
 * @param {string} input - A binary string (only '0' and '1').
 * @returns {number} The remainder (0, 1, or 2).
 */
function modThree_advanced(input) {
    //validate input
    if (!input || typeof input !== "string" || !/^[01]+$/.test(input)) {
        throw new Error("Input must be a non-empty binary string (containing only '0' and '1').");
    }
    //return remainder   
    const stateToRemainder = { S0: 0, S1: 1, S2: 2 };
    const finalState = modThreeFSM.run(input);
    return stateToRemainder[finalState];
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
    
    //check test cases
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

//Run all tests
runTest();
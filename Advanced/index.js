import FiniteStateMachine from './FiniteStateMachine.js';

// Define the mod-three FSM
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
 * Handles invalid inputs gracefully.
 * @param {string} input - A binary string (only '0' and '1').
 * @returns {number} The remainder (0, 1, or 2).
 * @throws {Error} For invalid inputs.
 */
function modThree_advanced(input) {
    if (!input || typeof input !== "string" || !/^[01]+$/.test(input)) {
        throw new Error("Input must be a non-empty binary string (containing only '0' and '1').");
    }

    const stateToRemainder = { S0: 0, S1: 1, S2: 2 };
    const finalState = modThreeFSM.run(input);
    return stateToRemainder[finalState];
}

// Example Usage
// console.log(modThree_advanced("110")); // Output: 0
// console.log(modThree_advanced("111")); // Output: 1
// console.log(modThree_advanced("10"));  // Output: 2

export default modThree_advanced;
class FiniteStateMachine {
    constructor({ states, alphabet, initialState, finalStates, transitions }) {
        this.states = new Set(states);
        this.alphabet = new Set(alphabet);
        this.initialState = initialState;
        this.finalStates = new Set(finalStates);
        this.transitions = transitions;

        if (!this.states.has(this.initialState)) {
            throw new Error(`Invalid initial state: ${this.initialState}`);
        }

        for (const [state, inputs] of Object.entries(this.transitions)) {
            if (!this.states.has(state)) {
                throw new Error(`Transition defined for undefined state: "${state}"`);
            }
            for (const input of Object.keys(inputs)) {
                if (!this.alphabet.has(input)) {
                    throw new Error(`Invalid input symbol: "${input}"`);
                }
            }
        }

        for (const state of this.states) {
            const stateTransitions = this.transitions[state] || {};
            for (const symbol of this.alphabet) {
                if (!(symbol in stateTransitions)) {
                    throw new Error(`State "${state}" is missing a transition for input "${symbol}".`);
                }
            }
        }
    }

    run(input, debug = false) {
        let currentState = this.initialState;

        for (const symbol of input) {
            if (!this.alphabet.has(symbol)) {
                throw new Error(`Invalid input symbol: ${symbol}`);
            }
            const nextState = this.transitions[currentState][symbol];
            if (debug) {
                console.log(`Transition: ${currentState} --(${symbol})--> ${nextState}`);
            }
            currentState = nextState;
        }

        return currentState;
    }
}

export default FiniteStateMachine;

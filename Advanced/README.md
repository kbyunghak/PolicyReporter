# Finite State Machine (FSM) Project

This project demonstrates how to implement a **Finite State Machine (FSM)** in JavaScript, with a practical example of computing the **modulo-3 of a binary number**. The FSM framework is generic and can be extended for various applications requiring state-based logic.

---

## Features
- A reusable FSM class with validation and transition functionality.
- An example FSM implementation for modulo-3 calculations.
- A `modThree_advanced` function that computes the remainder of a binary number divided by 3.
- Comprehensive unit tests to validate functionality.
- Proper error handling for invalid FSM configurations and inputs.

---

## Getting Started

### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org) (v14 or later)
- A code editor (e.g., [VS Code](https://code.visualstudio.com/))

---

### Installation

1. **Clone the Repository and run test cases**:
   ```bash
   git clone https://github.com/kbyunghak/PolicyReporter
   cd PolicyReporter/Advanced
   note test.js
   ```

### Usage

1. **Run the Modulo-3 FSM Example**:
   The following example calculates the modulo-3 of a binary string:
   ```bash
   node index.js
   ```

   **Expected Output** (for example inputs hardcoded in `index.js`):
   ```
   0
   ```

2. **Modify Input**:
   Update the input string in `index.js` to test with different binary strings:
   ```javascript
   console.log(modThree_advanced("111")); // Modify input here
   ```

   Re-run the script:
   ```bash
   node index.js
   ```

3. **Run Tests**:
   To validate the FSM and the `modThree_advanced` function, run:
   ```bash
   node test.js
   ```

   **Expected Output**:
   ```
   Test passed for input "110".
   Test passed for input "111".
   Test passed for invalid input "abc".
   ...
   ```

---

## Project Structure

```
fsm-project/
│
├── FiniteStateMachine.js    # FSM class implementation
├── index.js                 # Main script with mod-three FSM example
├── test.js                  # Unit tests for FSM and modThree_advanced function
├── package.json             # Project metadata (if npm is used)
├── .gitignore               # Git ignored files (e.g., node_modules/)
└── README.md                # Documentation
```

---

## How It Works

1. **FiniteStateMachine Class**:
   - Accepts configuration with states, inputs, transitions, initial state, and final states.
   - Validates transitions to ensure completeness.
   - Processes input strings symbol by symbol to compute the final state.

2. **modThree_advanced Function**:
   - Uses the FSM to compute the remainder of a binary number divided by 3.
   - Maps FSM states (`S0`, `S1`, `S2`) to remainders (`0`, `1`, `2`).

3. **Testing**:
   - Includes valid and invalid input cases to ensure the FSM behaves correctly.

---

## Example FSM: Modulo-3 Calculation

### States
- **S0**: Remainder = 0
- **S1**: Remainder = 1
- **S2**: Remainder = 2

### Transitions
| Current State | Input | Next State |
|---------------|-------|------------|
| S0            | 0     | S0         |
| S0            | 1     | S1         |
| S1            | 0     | S2         |
| S1            | 1     | S0         |
| S2            | 0     | S1         |
| S2            | 1     | S2         |

---

## Contributing
Contributions are welcome! Feel free to fork the repository and submit a pull request with your enhancements.

---

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---

### Example Commit Messages
For a clean Git history, use these commit messages:
1. `Initialize project structure`
2. `Add FiniteStateMachine class with basic functionality`
3. `Add mod-three FSM example`
4. `Implement modThree_advanced function`
5. `Add unit tests for FSM and modThree_advanced`
6. `Add project documentation`

---


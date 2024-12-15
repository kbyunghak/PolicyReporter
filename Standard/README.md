# modThree_standard.js

A JavaScript function that computes the remainder when a binary string is interpreted as a decimal number and divided by 3, using a Finite State Machine (FSM).

## Features
- Validates input to ensure it is a non-empty binary string.
- Efficiently calculates the remainder using FSM state transitions.
- Maps states directly to remainders for quick output.

## Usage
### Function: `modThree_standard`
#### Parameters
- `input` (string): A non-empty binary string (e.g., `"110"`, `"1010"`).

#### Returns
- (number): The remainder when the binary number is divided by 3 (0, 1, or 2).

#### Throws
- `Error`: If the input is not a valid non-empty binary string (e.g., empty strings, invalid characters, etc.).

### Example
```javascript
const remainder = modThree_standard("110");
console.log(remainder); // Output: 0
```
## Installation and Run Tests
Clone this repository and include the `modThree_standard.js` file in your project.

```bash
git clone https://github.com/kbyunghak/PolicyReporter
cd policyreporter/standard
node modThree_standard.js
```

## Unit Testing
This repository includes a comprehensive test suite to validate the `modThree_standard` function. The test suite includes both valid and invalid input cases.

### Example Output
```
Test passed for input: "110". Output: 0
Test passed for input: "111". Output: 1
Test passed for invalid input: "". Error: Input must be a non-empty binary string (containing only '0' and '1').
All tests passed successfully!
```

## File Structure
- **modThree_standard.js**: Contains the main function and test suite.
- **README.md**: Documentation file (you are here).

## Contributing
Contributions are welcome! If you encounter any issues or have suggestions, feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## JavaScript online compiler for test modThree_standard.js
https://www.programiz.com/online-compiler/84XDfb4eYwEZK

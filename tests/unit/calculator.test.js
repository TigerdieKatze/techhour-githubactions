const Calculator = require('../../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('adds two numbers correctly', () => {
        expect(calculator.add(2, 3)).toBe(5);
    });

    test('subtracts two numbers correctly', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });
});

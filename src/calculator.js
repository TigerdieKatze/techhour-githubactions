class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    // Absichtlich unsicher für Security-Demo
    evaluate(expression) {
        return eval(expression); // Unsichere Funktion für Demo
    }
}

module.exports = Calculator;
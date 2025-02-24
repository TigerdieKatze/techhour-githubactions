const express = require('express');
const Calculator = require('./calculator');

const app = express();
const calculator = new Calculator();

app.use(express.json());

app.post('/calculate', (req, res) => {
    const { operation, a, b } = req.body;
    let result;

    switch(operation) {
        case 'add':
            result = calculator.add(a, b);
            break;
        case 'subtract':
            result = calculator.subtract(a, b);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation' });
    }

    res.json({ result });
});

module.exports = app;
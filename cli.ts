#!/usr/bin/env node
const Runner = require('./core/runner');
const Greet = require('./commands/greet');
const Add = require('./commands/add');
const Subtract = require('./commands/subtract');
const Multiply = require('./commands/multiply');
const Divide = require('./commands/divide');
const Modulo = require('./commands/modulo');
const Power = require('./commands/power');
const Sqrt = require('./commands/sqrt');
const Factorial = require('./commands/factorial');
const Average = require('./commands/average');
const Max = require('./commands/max');
const Min = require('./commands/min');
const Github = require('./commands/github');
const Joke = require('./commands/joke');
const Pokemon = require('./commands/pokemon');

const app = new Runner();

app.registerCommands([
    Greet,
    Add,
    Subtract,
    Multiply,
    Divide,
    Modulo,
    Power,
    Sqrt,
    Factorial,
    Average,
    Max,
    Min,
    Github,
    Joke,
    Pokemon,
]);

app.run();
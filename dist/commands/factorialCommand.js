"use strict";
const chalk = require("chalk");
class Factorial_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("factorial <num>")
            .description("Calculate factorial of a number")
            .action((num) => this.factorial(num));
    }
    factorial(num) {
        const number = Number(num);
        if (number < 0) {
            console.log(chalk.red.bold("Error: Cannot calculate factorial of negative number!"));
            return;
        }
        if (!Number.isInteger(number)) {
            console.log(chalk.red.bold("Error: Factorial only works with integers!"));
            return;
        }
        const result = this.calculateFactorial(number);
        console.log(chalk.green.bold(`Result: ${result}`));
    }
    calculateFactorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.calculateFactorial(n - 1);
    }
}
module.exports = Factorial_Command;

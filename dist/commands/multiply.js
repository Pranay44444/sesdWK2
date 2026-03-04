"use strict";
const chalk = require("chalk");
class MultiplyCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('multiply <num1> <num2>')
            .description('Multiply two numbers')
            .action((num1, num2) => this.multiply(num1, num2));
    }
    multiply(num1, num2) {
        const result = Number(num1) * Number(num2);
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = MultiplyCmd;

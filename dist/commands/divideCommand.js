"use strict";
const chalk = require("chalk");
class Divide_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("divide <num1> <num2>")
            .description("Divide first number by second number")
            .action((num1, num2) => this.divide(num1, num2));
    }
    divide(num1, num2) {
        const divisor = Number(num2);
        if (divisor === 0) {
            console.log(chalk.red.bold("Error: Cannot divide by zero!"));
            return;
        }
        const result = Number(num1) / divisor;
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = Divide_Command;

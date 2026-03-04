"use strict";
const chalk = require("chalk");
class SubtractCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('subtract <num1> <num2>')
            .description('Subtract second number from first number')
            .action((num1, num2) => this.subtract(num1, num2));
    }
    subtract(num1, num2) {
        const result = Number(num1) - Number(num2);
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = SubtractCmd;

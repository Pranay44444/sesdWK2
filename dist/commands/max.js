"use strict";
const chalk = require("chalk");
class MaxCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('max <numbers...>')
            .description('Find maximum from multiple numbers')
            .action((numbers) => this.max(numbers));
    }
    max(numbers) {
        if (numbers.length === 0) {
            console.log(chalk.red.bold('Error: Please provide at least one number!'));
            return;
        }
        const result = Math.max(...numbers.map((num) => Number(num)));
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = MaxCmd;

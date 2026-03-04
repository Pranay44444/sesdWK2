"use strict";
const chalk = require("chalk");
class MinCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('min <numbers...>')
            .description('Find minimum from multiple numbers')
            .action((numbers) => this.min(numbers));
    }
    min(numbers) {
        if (numbers.length === 0) {
            console.log(chalk.red.bold('Error: Please provide at least one number!'));
            return;
        }
        const result = Math.min(...numbers.map((num) => Number(num)));
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = MinCmd;

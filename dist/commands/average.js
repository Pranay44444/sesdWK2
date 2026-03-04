"use strict";
const chalk = require("chalk");
class AverageCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('average <numbers...>')
            .description('Calculate average of multiple numbers')
            .action((numbers) => this.average(numbers));
    }
    average(numbers) {
        if (numbers.length === 0) {
            console.log(chalk.red.bold('Error: Please provide at least one number!'));
            return;
        }
        const sum = numbers.reduce((acc, num) => acc + Number(num), 0);
        const result = sum / numbers.length;
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = AverageCmd;

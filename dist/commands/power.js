"use strict";
const chalk = require("chalk");
class PowerCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('power <base> <exponent>')
            .description('Calculate base raised to exponent')
            .action((base, exponent) => this.power(base, exponent));
    }
    power(base, exponent) {
        const result = Math.pow(Number(base), Number(exponent));
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}
module.exports = PowerCmd;

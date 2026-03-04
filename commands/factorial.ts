import chalk = require('chalk');

class FactorialCmd {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('factorial <num>')
            .description('Calculate factorial of a number')
            .action((num) => this.factorial(num));
    }

    factorial(num) {
        const number = Number(num);
        if (number < 0) {
            console.log(chalk.red.bold('Error: Cannot calculate factorial of negative number!'));
            return;
        }
        if (!Number.isInteger(number)) {
            console.log(chalk.red.bold('Error: Factorial only works with integers!'));
            return;
        }
        const result = this.compute(number);
        console.log(chalk.green.bold(`Result: ${result}`));
    }

    compute(n) {
        if (n === 0 || n === 1) return 1;
        return n * this.compute(n - 1);
    }
}

export = FactorialCmd;

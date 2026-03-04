import chalk = require('chalk');

class SqrtCmd {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('sqrt <num>')
            .description('Calculate square root of a number')
            .action((num) => this.squareRoot(num));
    }

    squareRoot(num) {
        const number = Number(num);
        if (number < 0) {
            console.log(chalk.red.bold('Error: Cannot calculate square root of negative number!'));
            return;
        }
        const result = Math.sqrt(number);
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}

export = SqrtCmd;

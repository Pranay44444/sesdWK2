import chalk = require('chalk');

class ModuloCmd {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('modulo <num1> <num2>')
            .description('Get remainder of division')
            .action((num1, num2) => this.modulo(num1, num2));
    }

    modulo(num1, num2) {
        const divisor = Number(num2);
        if (divisor === 0) {
            console.log(chalk.red.bold('Error: Cannot modulo by zero!'));
            return;
        }
        const result = Number(num1) % divisor;
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}

export = ModuloCmd;

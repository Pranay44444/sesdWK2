import chalk = require('chalk');

class AddCmd {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('add <num1> <num2>')
            .description('Add two numbers')
            .action((num1, num2) => this.add(num1, num2));
    }

    add(num1, num2) {
        const result = Number(num1) + Number(num2);
        console.log(chalk.green.bold(`Result: ${result}`));
    }
}

export = AddCmd;

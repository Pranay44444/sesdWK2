import chalk = require('chalk');

class GreetCmd {
    program;

    constructor(program) {
        this.program = program;
    }

    register() {
        this.program
            .command('greet <name>')
            .description('Greet someone')
            .action((name) => this.sayHello(name));
    }

    sayHello(name) {
        console.log(chalk.green(`Hello ${name}!`));
    }
}

export = GreetCmd;

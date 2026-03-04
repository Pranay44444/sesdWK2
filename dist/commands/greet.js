"use strict";
const chalk = require("chalk");
class GreetCmd {
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
module.exports = GreetCmd;

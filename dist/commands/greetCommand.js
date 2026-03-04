"use strict";
const chalk = require("chalk");
class Greet_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("greet <name>")
            .description("Greet someone")
            .action((name) => this.sayHello(name));
    }
    sayHello(name) {
        console.log(chalk.green(`Hello ${name}!`));
    }
}
module.exports = Greet_Command;

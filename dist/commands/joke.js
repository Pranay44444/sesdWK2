"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk = require("chalk");
class JokeCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('joke')
            .description('Get a random joke')
            .action(() => this.fetchJoke());
    }
    async fetchJoke() {
        try {
            const res = await axios_1.default.get('https://official-joke-api.appspot.com/random_joke');
            const data = res.data;
            console.log(chalk.cyan(data.setup));
            console.log(chalk.yellow(data.punchline));
        }
        catch (err) {
            console.log(chalk.red('Error: Unable to fetch a joke right now!'));
        }
    }
}
module.exports = JokeCmd;

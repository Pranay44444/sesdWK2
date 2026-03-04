import axios from 'axios';
import chalk = require('chalk');

class JokeCmd {
    program;

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
            const res = await axios.get('https://official-joke-api.appspot.com/random_joke');
            const data = res.data;
            console.log(chalk.cyan(data.setup));
            console.log(chalk.yellow(data.punchline));
        } catch (err) {
            console.log(chalk.red('Error: Unable to fetch a joke right now!'));
        }
    }
}

export = JokeCmd;

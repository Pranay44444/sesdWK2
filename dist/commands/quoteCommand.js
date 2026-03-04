"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk = require("chalk");
class Quote_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("quote")
            .description("Get an inspirational quote")
            .option('-a, --author <name>', 'Get quote by specific author')
            .action((options) => this.getQuote(options));
    }
    async getQuote(options) {
        try {
            let url = "https://api.quotable.io/random";
            if (options.author) {
                url = `https://api.quotable.io/quotes?author=${encodeURIComponent(options.author)}`;
            }
            const res = await axios_1.default.get(url);
            let quote, author;
            if (options.author) {
                if (res.data.results && res.data.results.length > 0) {
                    const randomQuote = res.data.results[Math.floor(Math.random() * res.data.results.length)];
                    quote = randomQuote.content;
                    author = randomQuote.author;
                }
                else {
                    console.log(chalk.red(`No quotes found for author: ${options.author}`));
                    return;
                }
            }
            else {
                quote = res.data.content;
                author = res.data.author;
            }
            console.log(chalk.cyan.bold('\n Inspirational Quote:\n'));
            console.log(chalk.white(`"${quote}"`));
            console.log(chalk.yellow(`\n   - ${author}\n`));
        }
        catch (err) {
            console.log(chalk.red("Error: Unable to fetch quote!"));
        }
    }
}
module.exports = Quote_Command;

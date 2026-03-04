"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk = require("chalk");
class PokemonCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('pokemon <name>')
            .description('Get Pokemon information')
            .action((name) => this.fetchPokemon(name));
    }
    async fetchPokemon(name) {
        try {
            const res = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = res.data;
            console.log(chalk.green(`Name: ${data.name}`));
            console.log(chalk.yellow(`Height: ${data.height}`));
            console.log(chalk.cyan(`Weight: ${data.weight}`));
        }
        catch (err) {
            console.log(chalk.red('Error: Pokemon not found!'));
        }
    }
}
module.exports = PokemonCmd;

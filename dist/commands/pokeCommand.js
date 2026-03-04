"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
class Pokemon_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("pokemon <name>")
            .description("Get Pokemon information")
            .action((name) => this.getPokemon(name));
    }
    async getPokemon(name) {
        try {
            const res = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
            const data = res.data;
            console.log(`Name: ${data.name}`);
            console.log(`Height: ${data.height}`);
            console.log(`Weight: ${data.weight}`);
        }
        catch (err) {
            console.log("Pokemon not found!");
        }
    }
}
module.exports = Pokemon_Command;

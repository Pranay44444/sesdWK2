"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
class Joke_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("joke")
            .description("Get a random joke")
            .action(() => this.joke());
    }
    async joke() {
        try {
            const res = await axios_1.default.get("https://official-joke-api.appspot.com/random_joke");
            const data = res.data;
            console.log(data.setup);
            console.log(data.punchline);
        }
        catch (err) {
            console.log(err);
        }
    }
}
module.exports = Joke_Command;
// program
// .command("joke")
// .description("Random Joke")
// .action(async() => {
//     try{
//         const res = await axios.get("https://official-joke-api.appspot.com/random_joke")
//         const data = res.data
//         console.log(data.setup)
//         console.log(data.punchline)
//     }catch(err){
//         console.log(err)
//     }
// })

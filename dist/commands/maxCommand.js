class Max_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("max <numbers...>")
            .description("Find maximum from multiple numbers")
            .action((numbers) => this.max(numbers));
    }
    max(numbers) {
        if (numbers.length === 0) {
            console.log("Error: Please provide at least one number!");
            return;
        }
        const result = Math.max(...numbers.map(num => Number(num)));
        console.log(`Result: ${result}`);
    }
}
module.exports = Max_Command;

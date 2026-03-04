class Min_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("min <numbers...>")
            .description("Find minimum from multiple numbers")
            .action((numbers) => this.min(numbers));
    }
    min(numbers) {
        if (numbers.length === 0) {
            console.log("Error: Please provide at least one number!");
            return;
        }
        const result = Math.min(...numbers.map(num => Number(num)));
        console.log(`Result: ${result}`);
    }
}
module.exports = Min_Command;

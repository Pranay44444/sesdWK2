class SquareRoot_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("sqrt <num>")
            .description("Calculate square root of a number")
            .action((num) => this.squareRoot(num));
    }
    squareRoot(num) {
        const number = Number(num);
        if (number < 0) {
            console.log("Error: Cannot calculate square root of negative number!");
            return;
        }
        const result = Math.sqrt(number);
        console.log(`Result: ${result}`);
    }
}
module.exports = SquareRoot_Command;

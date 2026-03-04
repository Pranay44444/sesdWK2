"use strict";
class Version_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .version('1.0.0', '-v, --version', 'Display version number')
            .description('A comprehensive CLI tool with mathematical operations and API integrations');
    }
}
module.exports = Version_Command;

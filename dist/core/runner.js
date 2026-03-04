const { Command } = require('commander');
class AppRunner {
    constructor() {
        this.program = new Command();
    }
    registerCommands(commands) {
        commands.forEach((Cmd) => {
            const instance = new Cmd(this.program);
            instance.register();
        });
    }
    run() {
        this.program.parse();
    }
}
module.exports = AppRunner;

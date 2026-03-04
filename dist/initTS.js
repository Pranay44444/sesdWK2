const { execSync } = require("child_process");
class init_TS {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command("init_ts <folderName>")
            .action((folderName) => this.initializeTS(folderName));
    }
    initializeTS(folderName) {
        console.log("initialise TypeScript Project");
        this.run(`mkdir ${folderName}`);
        this.run(`cd ${folderName} && npm init -y`);
        this.run(`cd ${folderName} && npm install -D typescript`);
    }
    run(command) {
        execSync(command, { stdio: "inherit" });
    }
}
module.exports = init_TS;

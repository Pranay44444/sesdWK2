"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk = require("chalk");
class GithubCmd {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program
            .command('github <username>')
            .description('Get GitHub user information')
            .option('-r, --repos', 'Show user repositories')
            .action((username, options) => this.fetchUser(username, options));
    }
    async fetchUser(username, options) {
        try {
            const res = await axios_1.default.get(`https://api.github.com/users/${username}`);
            const user = res.data;
            console.log(chalk.blue.bold(`\n GitHub Profile: ${user.login}`));
            console.log(chalk.white(`Name: ${user.name || 'N/A'}`));
            console.log(chalk.white(`Email: ${user.email || 'N/A'}`));
            console.log(chalk.white(`Company: ${user.company || 'N/A'}`));
            console.log(chalk.white(`Location: ${user.location || 'N/A'}`));
            console.log(chalk.cyan(`Bio: ${user.bio || 'N/A'}`));
            console.log(chalk.yellow(`Public Repos: ${user.public_repos}`));
            console.log(chalk.green(`Followers: ${user.followers} | Following: ${user.following}`));
            console.log(chalk.magenta(`Profile: ${user.html_url}`));
            if (options.repos) {
                console.log(chalk.blue.bold('\n Top Repositories:'));
                const reposRes = await axios_1.default.get(`https://api.github.com/users/${username}/repos?sort=stars&per_page=5`);
                reposRes.data.forEach((repo, index) => {
                    console.log(chalk.white(`${index + 1}. ${repo.name} ⭐ ${repo.stargazers_count}`));
                    console.log(chalk.gray(`   ${repo.description || 'No description'}`));
                });
            }
            console.log();
        }
        catch (err) {
            if (err.response && err.response.status === 404) {
                console.log(chalk.red(`Error: User '${username}' not found on GitHub!`));
            }
            else {
                console.log(chalk.red('Error: Unable to fetch GitHub user data!'));
            }
        }
    }
}
module.exports = GithubCmd;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const axios_1 = __importDefault(require("axios"));
const chalk = require("chalk");
class Weather_Command {
    constructor(program) {
        this.program = program;
    }
    register() {
        this.program.command("weather <city>")
            .description("Get weather information for a city")
            .action((city) => this.getWeather(city));
    }
    async getWeather(city) {
        try {
            const res = await axios_1.default.get(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
            const data = res.data;
            const current = data.current_condition[0];
            const location = data.nearest_area[0];
            console.log(chalk.blue.bold(`\n🌍 Weather in ${location.areaName[0].value}, ${location.country[0].value}`));
            console.log(chalk.yellow(`🌡️  Temperature: ${current.temp_C}°C / ${current.temp_F}°F`));
            console.log(chalk.cyan(`☁️  Condition: ${current.weatherDesc[0].value}`));
            console.log(chalk.green(`💧 Humidity: ${current.humidity}%`));
            console.log(chalk.magenta(`💨 Wind Speed: ${current.windspeedKmph} km/h`));
            console.log(chalk.white(`👁️  Visibility: ${current.visibility} km\n`));
        }
        catch (err) {
            console.log(chalk.red("Error: Unable to fetch weather data. Please check the city name!"));
        }
    }
}
module.exports = Weather_Command;

const inquirer = require("inquirer");
const saveData = require("../scrapLogs/saveData");
require("dotenv").config();

const question = [
  {
    name: "Subject",
    type: "list",
    message: "Enter the name of the subject",
    choices: process.env.CHOICES.split(","),
  },
];
const subjectPrompt = () => {
  inquirer.prompt(question).then((answers) => {
    saveData(answers.Subject);
  });
};

module.exports = subjectPrompt;

const inquirer = require("inquirer");
const changeFileExtension = require("../changeFileExtension/changeFileExtenson");
require("dotenv").config();

const question = [
  {
    name: "Subject",
    type: "list",
    message: "Enter the name of the folder",
    choices: process.env.CHOICES.split(","),
  },
];
const subjectPrompt = () => {
  inquirer.prompt(question).then((answers) => {
    changeFileExtension(answers.Subject);
  });
};

module.exports = subjectPrompt;

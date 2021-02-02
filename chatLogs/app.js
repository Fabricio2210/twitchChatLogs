const conectDB = require('./db/connectDB');
const subjectPrompt = require('./services/prompts/subjectPrompt');
const chalk = require('chalk');
const figlet = require('figlet');

conectDB();
console.log(
    chalk.magenta(
      figlet.textSync('Twitch Chat Logs', { horizontalLayout: 'full' })
    )
  );
subjectPrompt();

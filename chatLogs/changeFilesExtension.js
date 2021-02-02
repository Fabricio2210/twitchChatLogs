const changeFileExtension = require('./services/prompts/fileChangeExtension');
const chalk = require('chalk');
const figlet = require('figlet');

console.log(
    chalk.magenta(
      figlet.textSync('Change File Extension', { horizontalLayout: 'full' })
    )
  );
  changeFileExtension();
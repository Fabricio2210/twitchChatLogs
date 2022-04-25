const fs = require("fs");
const readline = require("readline");
const moment = require("moment");
const sleep = require("./sleepFunc");
const bar = require("./progressBar");
const totalOfLinesFromFiles = require("./totalOfLinesFromFiles");
const saveDataElastic = require('./elasticSaveData')

const getDataFromLogs = (fileName, subject) => {
  let total = 0;
  async function processLineByLine() {
    const fileStream = fs.createReadStream(`./${subject}/${fileName}`);
    const rawDate = fileName.split(".").slice(0, -1).join(".");
    const parsedDate = moment(rawDate).format("YYYY-MM-DD");
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity,
    });
    let time = 100;
    let arrayLines = [];
    let dirLines = fs.readdirSync(`./${subject}`);
    totalOfLinesFromFiles(arrayLines, dirLines, subject);
    let totalOfLines = arrayLines.reduce(function (a, b) {
      return Math.max(a, b);
    });
    bar(totalOfLines, total, time);

    for await (const line of rl) {
      await sleep(time);
      const splitDateFromNameAndText = line.split("|");
      const splitDateFromHour = splitDateFromNameAndText[0].split(" ");
      const splitNameFromText = splitDateFromNameAndText[1].split(":");
      const name = splitNameFromText[0];
      const text = splitNameFromText[1];
      const hour = splitDateFromHour[1];
      saveDataElastic(name, text, hour, parsedDate, subject)
    }
  }
  processLineByLine();
};

module.exports = getDataFromLogs;

const fs = require('fs');
const readline = require('readline');
const moment = require('moment');
const LogData = require('../db/schema/LogSchema')
const sleep = require('./sleepFunc');
const bar = require('./progressBar');
const totalOfLinesFromFiles = require('./totalOfLinesFromFiles');

const getDataFromLogs = (fileName,subject)=>{
  let total = 0;
  async function processLineByLine() {
    const fileStream = fs.createReadStream(`./${subject}/${fileName}`);
    const rawDate = fileName.split('.').slice(0, -1).join('.')
    const parsedDate = moment(rawDate).format("YYYY-MM-DD")
    const rl = readline.createInterface({
      input: fileStream,
      crlfDelay: Infinity
    });
    let time = 100;
    let arrayLines = []
    let dirLines = fs.readdirSync(`./${subject}`)
    totalOfLinesFromFiles(arrayLines,dirLines,subject)
    let totalOfLines = arrayLines.reduce(function(a, b) {
      return Math.max(a, b);
    });
    bar(totalOfLines,total,time)
  
    for await (const line of rl) {
      await sleep(time)
      let newStringText = line.split(/\<.*?\>/)
      let newStringName = line.split(' ')
      let newStringHour = line.substr(1,8)
      const logData = new LogData({
        userName: newStringName[1],
        text: newStringText[1],
        hour: newStringHour,
        logDay: parsedDate,
        date: parsedDate,
        subject: subject
      })
      logData.save()
        .catch((err)=>{
          console.log(err)
        })   
    }
  }
  processLineByLine();
}

module.exports = getDataFromLogs
const fs = require('fs');
const readline = require('readline');
const moment = require('moment');
const LogData = require('../db/schema/LogSchema')
const getDataFromLogs = (fileName)=>{
const sleep = require('./sleepFunc')

async function processLineByLine() {
  const fileStream = fs.createReadStream(`./logs/${fileName}`);
  const rawDate = fileName.split('.').slice(0, -1).join('.')
  const parsedDate = moment(rawDate).format("YYYY-MM-DD")
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });
  for await (const line of rl) {
    await sleep(1000)
    let newStringNameAndText = line.split(/\[.*?\]/)
    let newStringHour = line.split(' ')[1]
    let newStringName = newStringNameAndText[1].split(' ')[1].slice(0, -1)
    let newStringText = newStringNameAndText[1].split(':')[1]
   const logData = new LogData({
     userName: newStringName,
     text: newStringText,
     hour: newStringHour,
     logDay: parsedDate,
     date: parsedDate
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
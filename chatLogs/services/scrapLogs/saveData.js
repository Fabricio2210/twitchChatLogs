const fs = require("fs");
const fsPromises = fs.promises;
const parseData = require("../../helpers/parseDataYoutube");
//const parseData = require('../../helpers/parseData')

async function saveData(subject) {
  try {
    let data = await fsPromises.readdir(`./${subject}`);
    if (data.length === 0) {
      console.log("Directory is empty");
      process.exit(1);
    } else {
      for await (files of data) {
        parseData(files, subject);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

module.exports = saveData;

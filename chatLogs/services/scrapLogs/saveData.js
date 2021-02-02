const fs = require('fs');
const fsPromises = fs.promises;
const parseData = require('../../helpers/parseData')

async function saveData(subject){
  try{
    let data = await fsPromises.readdir(`./${subject}`)
    for await (files of data){
      parseData(files,subject)
    }
  }catch(e){
    console.log(e)
  }
  
}

module.exports = saveData

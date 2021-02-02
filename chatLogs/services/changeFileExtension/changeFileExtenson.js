const fs = require('fs');
const path = require('path')
const changeFileExtension = async (subject) =>{
 let fileNames = await fs.promises.readdir(`./${subject}`)
 if(fileNames.length === 0){
   console.log("Folder is empty")
 }
 for await (files of fileNames){
   let fileContent =  fs.promises.readFile(`./${subject}/${files}`,(err,data) =>{
    return data
   })
   let fileNameFirstPiece = files.split('_') 
   if(path.extname(fileNameFirstPiece[0]) === ".txt"){
    console.log(`File ${fileNameFirstPiece} is already in the right format.`)
  }else{
    fileContent.then((data)=>{
      fs.promises.writeFile(`./${subject}/${fileNameFirstPiece[0]}.txt`,data,)
      console.log(`File ${fileNameFirstPiece[0]}.txt successfully converted.`)
    })
    fs.promises.unlink(`./${subject}/${files}`)
  }
}

} 

module.exports = changeFileExtension
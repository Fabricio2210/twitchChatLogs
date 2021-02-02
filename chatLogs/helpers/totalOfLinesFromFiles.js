const execSync = require('child_process').execSync;
const totalOfLinesFromFiles = (arrayLines,dirLines,subject) =>{
    dirLines.forEach((data)=>{
        let lines =  parseInt(execSync(`wc -l < ./${subject}/${data}`))
        arrayLines.push(lines)
    })
} 
module.exports = totalOfLinesFromFiles
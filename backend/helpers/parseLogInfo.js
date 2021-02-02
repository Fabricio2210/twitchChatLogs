const parseLogInfo = (arrayLogInfo) =>{
    let arrayDataLogs = []; 
    arrayLogInfo.forEach((dataLogs)=>{
        let {userName,text,hour,logDay} = dataLogs
        let objectDataLogs = {
            userName,
            text,
            hour,
            logDay      
        };
        arrayDataLogs.push(objectDataLogs)
    }) 
    return arrayDataLogs
}

module.exports = parseLogInfo


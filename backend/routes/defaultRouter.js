const LogData = require('../db/schemas/LogSchema')
const paginationInfo = require('../helpers/paginationInfo.js.js')
const queryLogs = require('../helpers/query')
const countDocuments = require('../helpers/countDocuments');
const logRawInfo = require('../helpers/logRawInfo');
const parseLogInfo = require('../helpers/parseLogInfo');
const logAnswer = require('../helpers/logAnswer');

const defaultRouter = async (router,subject) =>{
    console.log(subject)
    router.post(`/${subject}`,async (req,res)=>{
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        let query = queryLogs(req, subject);
        let {
          startIndex,
          endIndex,
          totalResults,
          nextPage,
          previousPage,
        } = paginationInfo(page, limit);
        if(!req.body.userName && !req.body.message && !req.body.hour && !req.body.dateFrom && !req.body.dateEnd){
            res.status(500).json({
                msg:'Fill at least one field'
            })
        }else{
            let count = await countDocuments(query, LogData, totalResults);
            let rawData = await logRawInfo(LogData, query, limit, startIndex);
            let arrayDataLog = await parseLogInfo(rawData);
            logAnswer(
                res,
                arrayDataLog,
                startIndex,
                endIndex,
                page,
                count,
                limit,
                nextPage,
                previousPage,
            );
        }
    });
}

module.exports = defaultRouter;
const paginationInfo = require('../helpers/paginationInfo.js');
const queryLogs = require('../helpers/query');
const logRawInfo = require('../helpers/logRawInfo');
const parseLogInfo = require('../helpers/parseLogInfo');
const logAnswer = require('../helpers/logAnswer');

const defaultRouter = async (router,subject) =>{
    router.post(`/${subject}`,async (req,res)=>{
        let page = parseInt(req.query.page);
        let limit = parseInt(req.query.limit);
        let query = queryLogs(req, subject);
        let {
          nextPage,
          previousPage,
        } = paginationInfo(page, limit);
        if(!req.body.userName && !req.body.message && !req.body.hour && !req.body.dateFrom && !req.body.dateEnd){
            res.status(500).json({
                msg:'Fill at least one field'
            })
        }else{
            let rawData = await logRawInfo(query,page,limit,req);
            let arrayDataLog =  parseLogInfo(rawData.data);
            logAnswer(
                res,
                arrayDataLog,
                page,
                nextPage,
                previousPage,
                limit,
                rawData.count
            );
        }
        console.log(req.query)
    });
}

module.exports = defaultRouter;

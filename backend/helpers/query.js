const queryOptions = (req, subject) => {
    let query = {
        subject
    };
    if(req.body.userName){
        query.userName = { $regex: req.body.userName, $options: "i" }
    }
    if(req.body.message){
        query.text = { $regex: req.body.message, $options: "i" }
    }
    if(req.body.hour){
        query.hour = { $regex: req.body.hour, $options: "i" }
    }
    if(req.body.dateFrom && req.body.dateEnd){
        query.logDay = {"$gte": req.body.dateFrom,"$lte": req.body.dateEnd}
    }
    console.log(query)
    return query
}

module.exports = queryOptions
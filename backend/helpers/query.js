const query = (req, subject) => {
  let body = {
    query: {
      bool: {
        must: [
          {
            match: {
              subject: subject,
            },
          },
        ],
      },
    },
    sort: [{ date: "desc" }],
  };
  if (req.body.userName && req.query.userName === 'match') {
    let query = {
        match: {
          userName: req.body.userName,
        },
    };
    body.query.bool.must.push(query);
  }
  if(req.body.userName && req.query.userName === 'fuzz'){
    let query = {
      fuzzy: {
        userName: {
          value: req.body.userName,
          fuzziness: 1,
        },
      },
    };
    body.query.bool.must.push(query);
  }
  if(req.body.userName && req.query.userName === 'prefix'){
    let query = {
      prefix: {
        userName:{
          value: req.body.userName
        }
      }
    }
    body.query.bool.must.push(query);
  }
  if (req.body.message && req.query.message === "matchPhrase") {
    let query = {
      match_phrase: {
        text: req.body.message,
      },
    };
    body.query.bool.must.push(query);
  }
  if (req.body.message && req.query.message === "matchPhrasePrefix") {
    let query = {
      match_phrase_prefix: {
        text: req.body.message,
      },
    };
    body.query.bool.must.push(query);
  }
  if (req.body.dateFrom && req.body.dateEnd) {
    let query = {
      range: { date: { gte: req.body.dateFrom, lte: req.body.dateEnd } },
    };
    body.query.bool.must.push(query);
  }
  console.log(req.body);
  return body;
};
module.exports = query;

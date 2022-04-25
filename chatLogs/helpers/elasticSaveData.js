const elasticsearch = require("elasticsearch");
const moment = require('moment')
const client = new elasticsearch.Client({
  host: "localhost:9200",
  log: "trace",
  apiVersion: "7.2", // use the same version of your Elasticsearch instance
});

const saveData =  (name, text, hour, parsedDate, subject) => {
   client.indices.putMapping({
    index: "logschemas",
    type: "logschemas",
    includeTypeName: true,
    body: {
      properties: {
        date: {
          type: "date",
        },
      },
    },
  });
  client.index({
    index: "logschemas",
    type: "logschemas",
    body: {
      userName: name,
      text: text,
      hour: hour,
      logDay: parsedDate,
      date:moment(parsedDate).format(),
      subject: subject,
    },
  });
};
module.exports = saveData
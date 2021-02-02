const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
    userName:{
        type: String,
    },
    text:{
        type: String,
    },
    hour:{
        type: String,
    },
    logDay:{
        type: String,
    },
    subject:{
        type: String
    },
    date:{
        type: Date,
        index: true
    }
});

module.exports = mongoose.model('logSchema', LogSchema)
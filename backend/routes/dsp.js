const router = require('express').Router();
const defaultRouter = require('./defaultRouter')

defaultRouter(router,'DSP')

module.exports = router;
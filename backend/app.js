const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const rotasLogsDsp = require('./routes/dsp')
const rotasLogsProjared = require('./routes/projared')
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(rotasLogsDsp);
app.use(rotasLogsProjared);

const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Conectado na porta ${port}`)
})

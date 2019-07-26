const express = require('express');
const apiRouter = require('./routes/index');


const bodyParser  = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/api', apiRouter);

exports.start = (port) => {
    app.listen(port, (err) => {
        if (err) {
            console.log(`Error : ${err}`);
            process.exit(-1);
        }

        console.log(`app is running on port ${port}`);
    });
}

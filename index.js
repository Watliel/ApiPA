const mongoose = require('./services/mongoose.service');
const app = require('./express.service');

app.start(8000, '0.0.0.0');

//mongoose.connect("mongodb://Arnaud:Arnaud1@ds153947.mlab.com:53947/arnaud");
mongoose.connect("mongodb+srv://Arnaud:Arnaud@nodeapi-wzxa8.mongodb.net/test?retryWrites=true&w=majority");
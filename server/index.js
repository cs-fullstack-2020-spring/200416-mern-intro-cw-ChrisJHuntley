let express = require('express');
let app = express();
app.use(express.json())

let mongoose = require('mongoose')
let mongoDB = "mongodb+srv://student:C0d3Cr3w@cluster0-2wftu.mongodb.net/cs_database?retryWrites=true&w=majority"
console.log(`connecting to mongo at ${mongoDB}`)
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
let db= mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

let api = require('./routes/api')
app.use('/api', api);

let portNumber = 6000;
app.listen(portNumber, () => {
    console.log(`listening to ${portNumber}`)
});

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');
const dbConfig = config.get('dbConfig');
const path = require('path');

const api = require('./routes/student.routes')

// MongoDB Configuration
mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
mongoose.connect(dbConfig.connectionString, {
    useNewUrlParser: true
}).then(() => {
        console.log('Database sucessfully connected')
    },
    error => {
        console.log('Database could not be connected: ' + error)
    }
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(cors());

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, '../build')));

app.use('/api', api)

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../build/index.html'));
});

const port = config.get("port");
app.listen(port, () => {
    console.log('Connected to port ' + port)
})

app.use((req, res, next) => {
    // Error goes via `next()` method
    setImmediate(() => {
        next(new Error('Something went wrong'));
    });
});

app.use(function (err, req, res, _next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});
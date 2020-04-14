const express = require('express');
const bodyParser = require('body-parser');
const apolloServer = require('./src');

const app = express();

apolloServer.applyMiddleware({ app });

// Listen-------------------
app.listen(3000, function() {
    console.log('listening on 3000')
})

// -------****-------------------
app.use(bodyParser.urlencoded({ extended: true }))

// Routes-------------------
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/Register', (req, res) => {
    console.log(req.body.userName);
})
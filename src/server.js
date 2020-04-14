const express = require('express');
const bodyParser = require('body-parser');
const apolloServer = require('./graphql');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

apolloServer.applyMiddleware({ app });

// -------****-------------------
app.use(bodyParser.urlencoded({ extended: true }))

// Routes-------------------

app.use("/", require("./router"));

// Listen-------------------
app.listen(process.env.SERVER_PORT, function() {
    console.log(`listening on ${process.env.SERVER_PORT}`)
})

app.listen({ port: process.env.GRAPHQL_PORT }, () =>
  console.log(
    `🚀 Server ready at http://localhost:${process.env.GRAPHQL_PORT}${apolloServer.graphqlPath}`
  )
);

module.exports = app;
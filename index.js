
const express = require('express')

const mongoose = require('mongoose')

const dbHost = process.env.DB_HOST || 'localhost'
const dbPort = process.env.DB_PORT || 27017
const dbName = process.env.DB_NAME || 'my_db_name'
const mongoUrl = `mongodb://${dbHost}:${dbPort}/${dbName}`

const connectWithRetry = function () { // when using with docker, at the time we up containers. Mongodb take few seconds to starting, during that time NodeJS server will try to connect MongoDB until success.
  return mongoose.connect(mongoUrl, { useNewUrlParser: true, useFindAndModify: false }, (err) => {
    if (err) {
      console.error('Failed to connect to mongo on startup - retrying in 5 sec', err)
      setTimeout(connectWithRetry, 5000)
    }
  })
}
const app = express();

app.get('/', (req, res) => {
    res.send('ok')
});

app.listen('3000', (req, res) => {
    console.log('listening on http://localhost')
})
//docker tag local-image:tagname new-repo:tagname
//docker push new-repo:tagname
//V8b)8H9ES,Gv/nr\
//V8b)8H9ES,Gv/nr\
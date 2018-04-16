const
    express = require('express'),
    path = require('path')

const app = express()


//TODO: Figure out how to serve up each page when a request is made
app.use(express.static(path.join(__dirname, '..', '/client')))
app.use(require('./routes')())

app.listen(8080, () => {
    console.log('Server is running')
})


let express = require('express')
let express = require('express')
let app = express()
let morgan = require('morgan')

app.use(morgan('combined'))

app.use(express.static('public'))

app.use('/home', function(req,res,next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.send('<html><body><p>Welcome</p></body></html>')

    res.end()
})

app.use('/about', function(req,res,next) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json({message: "About me"})

    res.end()
})



app.use(function(req,res,next) {
    throw {error: `Cannot find ${req.url}`}
})

app.use(function(err,req,res,next) {
    res.end(err.error)
})

module.exports = app
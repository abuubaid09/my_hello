var express = require('express')
var app = express()

app.get('/name/:fullName', function (req, res) {
    res.send(req.params.fullName)
  })
app.get('/name/first/:firstName', function (req, res) {
    res.send(req.params.firstName)
})
app.get('/name/last/:lastName', function (req, res) {
    res.send(req.params.lastName)
})
app.listen(3000);
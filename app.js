var express = require('express')
var app = express()
var path = require('path')

app.use(express.static(path.join(__dirname,'public')))

// app.get('/', function (req, res) {
//   res.send('<h2> Hello World!</h2>')
// })
// app.get('/Home', function (req, res) {
//   res.sendFile('index.html', {"root": __dirname})
// })
// app.get('/About', function (req, res) {
//   res.send('<h1>About us</h1')
// })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})


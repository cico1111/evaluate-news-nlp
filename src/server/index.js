
const dotenv = require('dotenv')
dotenv.config()

var path = require('path')

const express = require('express')
const app = express()
app.use(express.static('dist'))
/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());


// designates what port the app will listen to for incoming requests
const port = 8080
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})


app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
  })
app.get('/key', function (req, res) {
  res.send({key: process.env.API_KEY})
})
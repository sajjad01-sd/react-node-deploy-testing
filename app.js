const express = require('express')
const app = express()
const port = 3001
const sql = require('mssql')
var bodyParser = require('body-parser');
// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// --> Add this
// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:8080', 'https://lit-castle-72231.herokuapp.com/']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials" , true )
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  res.header("Access-Control-Allow-Headers",'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.get('/', (req, res) => {
  res.send('Welcome Lead Server API!')
})

app.get('/mohibbur', (req, res) => {
  res.send('Mohibbur Rahman!')
})

app.get('/taifur', (req, res) => {
  res.send('Taifur Rahman!')
})

var index = require('./route/index.route');

app.use('/', index);

// --> Add this
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'ManagementAppFrontend/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'ManagementAppFrontend/build', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`Dataserver API listening at http://localhost:${port}`)
})
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var cookieParser = require('cookie-parser')
var crypto = require('crypto')
var bodyParser = require('body-parser')

var app = new (require('express'))()
var port = 3000
var     id = "",
        first_name = "";

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.set('port', (process.env.PORT || 3000));
app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("🌎 Listening on port %s", port)
  }
})
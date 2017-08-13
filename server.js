var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var cookieParser = require('cookie-parser')
var crypto = require('crypto')
var bodyParser = require('body-parser')

var app = new (require('express'))()
var port = 5000
var     id = "",
        first_name = "";

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

 
app.set('port', (process.env.PORT || 5000));
 
app.get('/', function(request, response) {
    var result = 'App is running' 
    response.sendFile(__dirname + '/index.html')
}).listen(app.get('port'), function() {
    console.log('App is running, server is listening on port ', app.get('port'));
});
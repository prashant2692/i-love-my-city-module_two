var express = require('express');
var app = express();
var router = require('./routes/routes.js');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

var port = process.env.port || 8080;

app.listen(port, function () {
    console.log("Server is running on PORT : " + port);
});

app.get('/', router.home);
app.get('/:city', router.city);
var express = require('express')


//App setup

var app = express();

var server = app.listen(9080, function(){
    console.log('listening to request on port 9080');
})

app.use(express.static('public'));

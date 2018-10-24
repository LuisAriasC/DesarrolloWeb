const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', function(req, res){
    res.sendfile('index.html');
});

app.listen(port, () => console.log('App Listening on port: ' + port));

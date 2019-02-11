var express = require('express');
const produce = require('./mockData');
var app = express();

app.get('/produce/:name', function(req, res) {
    let name = req.params.name;
    let result = produce.filter((item) => {
        if(item.name.toLocaleLowerCase().indexOf(name) >=0 ) 
        return item;
    });
    res.send(result);
})

app.listen(3000);
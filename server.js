const express = require('express');
const app = express();

var bruh = [];
var changed = false;

app.get('/', function (req, res) {
    console.log("SOu");
    if (!changed) {
        return res.send("No Change");
    } else {
        return res.send(bruh[bruh.length-1]);
    }
});


app.get('/joinServer', function (req, res) {
    console.log("SODASD")
    console.log(req.query)
    bruh.push(req.query.name);
    changed = true;
    return res.send('Added bro');
   });

app.listen(process.env.PORT || 8080);
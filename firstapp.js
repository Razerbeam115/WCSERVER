//Activity Name: firsapp.js
//Author Name: Robbie Joseph Mabanta
//Section and Code: WD202 / 2083


var express = require("Express");

var app = express();

app.get("/", function(request, response){
    response.send("hello world!");
});

app.listen(5000, function(){
    console.log('Server running at http://localhost:5000');
});

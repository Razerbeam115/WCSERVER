//Activity Name: secondexpress.js
//Author Name: Robbie Joseph Mabanta
//Section and Code: WD202 / 2083

var express = require("Express");

var app = express();

app.get("/", function(request, response){
  response.send("Succesfully created the second App!");
});

var server = app.listen(2001, 'localhost', function(){
  var host = server.address().address
  var port = server.address().port

  console.log('Server running at http://%s:%s', host, port);
}
);
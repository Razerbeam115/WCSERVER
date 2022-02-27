//Activity Name: mid-demo2.js
//Author Name: Robbie Joseph Mabanta
//Section and code: WD-202

var express = require('Express');
var app = express();
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false})

app.use(express.static('public'));
app.get("/index2.html", function(req, res){
    res.sendFile(__dirname + "/" + "index2.html");
})

app.post("/process_post", urlencodedParser, function(req, res){
    response ={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };

    console.log(response);
    res.end(JSON.stringify(response));
})

var Server = app.listen(5000,'localhost', function(){
    var host = Server.address().address
    var port = Server.address().port

    console.log("Example app listening at http://%s:%s",host,port)
});
var mysql = require('mysql');
var express =  require('express');
var cors = require('cors');

var app = express()

app.use(cors());

app.get('/menu', getmenu);

function getmenu(req,res){

    
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'utec',
  password : '1234567890',
  database : 'restaurant'
});

connection.connect();


var myquery = "SELECT price, meal FROM menu;"

connection.query(myquery, function(error, results, fields){
    res.send(results);
    connection.end();
});



}

app.listen(3000, function(){
    console.log("Server started!")
});

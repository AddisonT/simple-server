// Use require to get access to the Node
// http library and store it in a variable.
var express = require('express');

// Next we declare a variable that instantiates
// the express server. Common names for this
// variable include `app` or `server`. We're
// going to call it `app` because that's what
// they do in the express documentation.

var app = express();

// Now that we have an app to build off of,
// we should set up some routes.

// The pattern for setting up routes in express is as follows
// 
// app . HTTP-VERB ( '/ROUTE/PATH/DELIMITED/BY/SLASHES' , function(req,res) { // DO STUFF HERE // });


// Our first route will be `GET /` which will respond
// with "Hello World" for every request that
// comes in to your server.

app.get('/', function(req,res) {

  // Send back the response 'Hello World'

  res.send("This is the calculator. Go to /add/num/num to add, /subtract/num/num to subtract, /multiply/num/num to multiply, and /divide/num/num to divide");
});

app.get('/add/:x/:y', function(req,res){
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  var z = x+y;
  res.send("Sum is "+z);
 // res.send("Sum is "+String((Number(req.params.x)+Number(req.params.y))));
});
app.get('/subtract/:x/:y', function(req,res){
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  var z = x-y;
  res.send("Subtraction is "+z);
  //res.send("Subtraction is "+String((Number(req.params.x)-Number(req.params.y))));
});

app.get('/multiply/:x/:y', function(req,res){
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  var z = x*y;
  res.send("Multiply is "+z);
  //res.send("Multiply is "+String((Number(req.params.x)*Number(req.params.y))));
});

app.get('/divide/:x/:y', function(req,res){
  var x = Number(req.params.x);
  var y = Number(req.params.y);
  var z = x/y;
  res.send("Sum is "+z);
  //res.send("Division is "+String((Number(req.params.x)/Number(req.params.y))));
});

// Tell the server to start listening for request on
// port 3000

app.listen(3000);

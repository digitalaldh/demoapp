var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. This is ALEKSANDER D. & this is a test app written in javascript. '); //write a response to the client
  res.end(); //end the response
}).listen(4000); //the server object listens on port 4000

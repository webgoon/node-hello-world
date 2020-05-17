const http = require('http');
const PORT = process.env.PORT || 5000;

var server = http.createServer(function(req, res) {
  
  res.writeHead(200);
  
  res.end(`Hello, world! Listening on ${PORT} in the view.`);

  console.log(`Hello, world! Listening on ${PORT} on the console.`);
});



server.listen(PORT,
  console.log(`Sever app.js started on port ${PORT}`)
);

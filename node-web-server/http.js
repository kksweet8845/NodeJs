const http = require('http');
const url = require('url');
const port = 12222;
//create a server object
http.createServer((req,res) => {
	// status code 200 ,second argument is an object containing the response
	res.writeHead(200,{'Content-Type': 'text/html'});
	//split the query string into readable parts
	var q = url.parse(req.url,true);
	var txt = q.query.year + " " + q.query.month;
	console.log(q.host);
	console.log(q.pathname);
	console.log(q.search);
	// Write a response to the client
	res.write(`Hello client in address ${req.url.hostname}!`);
	res.end(txt);
}).listen(port);

console.log(`Listening on port: ${port}`);

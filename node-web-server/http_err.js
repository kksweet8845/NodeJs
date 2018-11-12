const http = require('http');
const fs = require('fs');
//fs is often used for Reading , Creating ,Updating ,Deleting and Renaming files
const url = require('url');

const port = 12221;

var srv;
  srv = http.createServer((req,res)=>{
  //parse the url of the request,true in second argument
  //also parse the query string with module querystring
  var q = url.parse(req.url,true);
  //Set the filename
  var filename = "." + q.pathname;
  //file system read file by filename and callback func
  //err is error message and data is the variable filename content
  fs.readFile(filename,(err, data)=>{
    if(err){
      //Set the head type
      res.writeHead(404,{'Content-Type':'text/html'});
      //end the process of the response from node core
      return res.end("404 Not Found Asshole!");
    }
    res.writeHead(200,{'Content-type':'text/html'});
    res.write(data);
    return res.end();
  });

});

srv.listen(port);
if(srv.listening)
console.log(`Listening on port: ${port}`);

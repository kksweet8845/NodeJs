const http = require('http');
const fs = require('fs');
const express = require('express');
const formidable = require('formidable');
const port = 12220;

var app = express();

var srv = http.createServer((req,res)=>{
  if(req.url == '/fileUploadAjax' && req.method.toLowerCase() == 'post'){
    //parse a file upload
    var form  = new formidable.IncomingForm();
    form.parse(req,(err,fields,files)=>{
      var oldPath = files.filetouploadAjax.path;
      var newPath = __dirname + '/data/test2';
      fs.rename(oldPath , newPath , (err)=>{
        if(err) throw err;
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write('<form action="fileUploadAjax" method="post" enctype="multipart/form-data">');
        res.write('<input type="file" name="filetouploadAjax"><br>');
        res.write('<input type="submit">');
        res.write('</form>');
        res.write('<h1>File is uploaded fuck.</h1>');
        res.end();
      });
    });
  } else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    res.write('<form action="fileUploadAjax" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetouploadAjax"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
  }
}).listen(port)

if(srv.listening)
console.log(`Listening on port: ${port}`);

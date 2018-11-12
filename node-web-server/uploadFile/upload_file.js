/*In order to upload the file, we use
the module called Formidable Module.
*/
const formidable = require('formidable');
const http = require('http');
const fs = require('fs');

//port
const port = 12224;
var srv = http.createServer((req,res)=>{
    //Parse the uploaded files and gets placed on a temporart folder
    //on your computer.
    if(req.url == '/fileupload'){
      console.log(req.url);
      var form = new formidable.IncomingForm();
      form.parse(req,(err, fields, files)=>{
        var oldPath = files.filetoupload.path;
        var newPath = __dirname + '/data/test';
        fs.rename(oldPath, newPath, (err) =>{
          if(err) throw err;
          res.write('File uploaded');
          res.end();
        });
      });
    }//Make an upload file form
    else {
      res.writeHead(200,{'Content-Type': 'text/html'});
      res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
      res.write('<input type="file" name="filetoupload"><br>');
      res.write('<input type="submit">');
      res.write('</form>');
      return res.end();
    }
}).listen(port);


if(srv.listening)
console.log(`Listening on port: ${port}`);

//Parse the uploaded files

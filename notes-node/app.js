console.log('Starting app.js');

const fs = require('fs');
//const os = require('os');
const notes = require('./notes.js');
const yargs = require('yargs');
const _ = require('lodash');

const argv = yargs.argv;

var command = process.argv[2];
console.log('Yargs',argv);

if(command == 'add'){
  notes.addNote(argv.title,argv.body);
}else if(command == 'list'){
  notes.getAll();
}else if (command == 'read'){
  notes.readAll();
}else if(command == 'remove') {
  notes.removeAll();
}else {
  console.log('Command not reconginzed');
}


//console.log(true);
//console.log('eric');
//var filteredArray = _.uniq(['Mike',1,2,2,3,3,4,4,'eric','andrew']);
//console.log(filteredArray);




//console.log('Result:', notes.add(9, -2));
//var user = os.userInfo();
//console.log(user);
//
//fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}.\n`);

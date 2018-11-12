console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title,body) => {
  var notes = [];
  var note = {
    title,
    body
  };

  try {
  var notesString = fs.readFileSync('notes-data.json');
  notes = JSON.parse(notesString);
  } catch (e){

  }
  // array.filter() will pass every elements in the array
  // to the callback function then return the true or false
  //Just like that
  // a[1,2,3,5,6,7,10,18];
  // a.filter((number) => {
  //  return number >= 6
  //});
  //Then result will be [6,7,10,18];
  var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    notes.push(note);
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
  }
};
var getAll = () => {
   console.log('Getting all notes');
};
var readAll = () => {
  console.log('Reading all notes');
}
var removeAll = () => {
  console.log('Removing all notes');
}
/*module.exports.addNote = () => {
  console.log('addNote');
  return 'New note';
};*/
module.exports = {
  addNote: addNote, //which is equal addNote
  getAll,
  readAll,
  removeAll
}

module.exports.add = (a, b) => {
  return a + b;
};

module.exports.age = 19;

const fs= require('fs');
const util = require('util');

const uuid = require('uuid/v1');

const readAsync = util.promisify(fs.readFile);
const writeAsync = util.promisify(fs.writeFile);

class Notes{
 read(){
     return readAsync('db/db.json', 'utf-8');
 }

 write(data){
     return writeAsync('db/db.json', JSON.stringify(data));
 }

 readNotes(){
     return this.read().then((notes)=>{
         let allNotes;

         try{
            allNotes = [].concat(JSON.parse(notes))
         }catch(err){
            allNotes = []
         }

         return allNotes;
     });
 }

 

}

module.exports = new Notes();
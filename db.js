var low = require("lowdb");
var FileSync = require('lowdb/adapters/FileSync');
var adapters = new FileSync('db.json');


db = low(adapters);

//set some defaults( required if your JSON file is empty)
db.defaults({ users: [],
              sessions: [],
              transfers: []})
    .write();

module.exports = db;
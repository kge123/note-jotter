const fs= require('fs');
const util = require('util');

const uuid = require('uuid/v1');

const readAsync = util.promisify(fs.readFile);


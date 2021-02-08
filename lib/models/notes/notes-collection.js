'use strict';
const schema = require('./notes-schema.js');
const Model = require('../mongo-model.js');

class Notes extends Model {
    constructor() {
        super(schema);
    }
}
module.exports = new Notes();
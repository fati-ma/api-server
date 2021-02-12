'use strict';
const todo = require('./notes-schema.js');
const Model = require('../mongo-model.js');

class Notes extends Model {
    constructor() {
        super(todo);
    }
}
module.exports = new Notes();
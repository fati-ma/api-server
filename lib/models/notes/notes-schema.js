'use strict';

const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name: { type: String, required: true },
    difficulty: { type: Number, required: true },
    details: { type: String, required: true },
    completed: { type: Boolean, required: true }
});
module.exports = mongoose.model('schema', schema);
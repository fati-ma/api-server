'use strict';

const categories = require('./categories-schema');
const Model = require('../mongo-model');


class Collection extends Model{
  constructor(){
      super(categories)
  }
//   get(_id) {
//     const query = _id ? { _id } : {};
//     return categories.find(query);
//   }
//   create(record) {
//     const newRecord = new categories(record);
//     return newRecord.save();
//   }
//   update(_id, record) {
//     return categories.findByIdAndUpdate(_id, record, { new: true });
//   }
//   delete(_id) {
//     return categories.findByIdAndDelete(_id);
//   }
}

module.exports = new Collection();
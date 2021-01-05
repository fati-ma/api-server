'use strict';

const products = require('./products-schema');
const Model = require('../mongo-model');

class Collection extends Model{
  constructor(){
      super(products);
  }
//   get(_id) {
//     const query = _id ? { _id } : {};
//     return products.find(query);
//   }
//   create(record) {
//     const newRecord = new products(record);
//     return newRecord.save();
//   }
//   update(_id, record) {
//     return products.findByIdAndUpdate(_id, record, { new: true });
//   }
//   delete(_id) {
//     return products.findByIdAndDelete(_id);
//   }
}

module.exports = new Collection();
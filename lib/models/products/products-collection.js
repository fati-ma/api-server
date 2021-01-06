'use strict';

const productsModel = require('./products-schema');
const Model = require('../mongo-model');

class Product extends Model{
  constructor(){
      super(productsModel);
  }

}

module.exports = new Product();

'use strict';

const categories = require('./categories-schema');
const categoryModel = require('../mongo-model');


class Category extends categoryModel{
  constructor(){
      super(categories)
  }

}

module.exports = new Category();
'use strict';
require('@code-fellows/supergoose');
const productsModel = require('../lib/models/products/products-collection.js');
const categoriesModel = require('../lib/models/categories/categories-collection.js');
let productObj = {
  name: 'laptops',
  display_name: 'laptops',
  description: 'laptops category',
  category: 'laptobs description',
};
let categoryObj = {
  name: 'cameras',
  display_name: 'cameras',
  description: 'cameras description',
};

describe('collection Model', () => {
  it('create() a new product', () => {
    return productsModel.create(productObj).then((record) => {
      Object.keys(productObj).forEach((key) => {
        expect(record[key]).toEqual(productObj[key]);
      });
    });
  });
  it('create() a new category', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      Object.keys(categoryObj).forEach((key) => {
        expect(record[key]).toEqual(categoryObj[key]);
      });
    });
  });
  it('get() a product', () => {
    return productsModel.create(productObj).then((record) => {
      return productsModel.get(record._id).then((results) => {
        Object.keys(productObj).forEach((key) => {
          expect(results[0][key]).toEqual(productObj[key]);
        });
      });
    });
  });
  it('get() a category', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.get(record._id).then((results) => {
        Object.keys(categoryObj).forEach((key) => {
          expect(results[0][key]).toEqual(categoryObj[key]);
        });
      });
    });
  });
  it('delete() a product', () => {
    return productsModel.create(productObj).then((record) => {
      return productsModel.delete(record._id).then(() => {
        return productsModel.get(record._id).then((results) => {
          expect(results[0]).toEqual(undefined);
        });
      });
    });
  });
  it('delete() a category', () => {
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.delete(record._id).then(() => {
        return categoriesModel.get(record._id).then((results) => {
          expect(results).toEqual([]);
        });
      });
    });
  });

  it('update() a product', () => {
    let newObj = {
      name: 'new laptops',
      display_name: 'new laptops',
      description: 'laptops category',
      category: 'laptobs description',
    };

    return productsModel.create(productObj).then((record) => {
      return productsModel.update(record._id, newObj).then(() => {
        return productsModel.get(record._id).then((results) => {
          Object.keys(productObj).forEach((key) => {
            expect(results[0][key]).toEqual(newObj[key]);
          });
        });
      });
    });
  });

  it('can update() a category', () => {
    let newObj = {
      name: 'new cameras',
      display_name: 'new cameras',
      description: 'cameras description',
    };
    return categoriesModel.create(categoryObj).then((record) => {
      return categoriesModel.update(record._id, newObj).then(() => {
        return categoriesModel.get(record._id).then((results) => {
          Object.keys(categoryObj).forEach((key) => {
            expect(results[0][key]).toEqual(newObj[key]);
          });
        });
      });
    });
  });
});
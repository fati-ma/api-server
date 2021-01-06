'use strict';

const { server } = require('../lib/server.js');

require('@code-fellows/supergoose');
require('../lib/models/products/products-collection.js');
require('../lib/models/categories/categories-collection.js');

const supergoose = require('@code-fellows/supergoose');
const mockRequest = supergoose(server);

let productObj = {
  name: 'cameras',
  display_name: 'camera product',
  description: 'camera description',
  category: 'camera category',
};
let categoryObj = {
  name: 'laptops',
  display_name: 'laptops',
  description: 'laptobs description',
};

describe('api server', () => {
  it('Should respond with 500 on an internal/server error', async () => {
    await mockRequest.get('/error').then((results) => {
      expect(results.status).toBe(500);
    });
  });

  it('Should respond with 404 on a wrong route', () => {
    return mockRequest.get('/fatima').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('Should respond with 200 on a right route', () => {
    return mockRequest.get('/api/v1/categories').then((results) => {
      expect(results.status).toBe(200);
    });
  });
  it('Should respond with 404 on a wrong method', () => {
    return mockRequest.post('/').then((results) => {
      expect(results.status).toBe(404);
    });
  });
  it('create() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((results) => {
        let record = results.body;
        Object.keys(categoryObj).forEach((key) => {
          expect(record[key]).toEqual(categoryObj[key]);
          expect(results.status).toBe(201);
        });
      });
  });

  it('create() a product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productObj)
      .then((results) => {
        let record = results.body;
        Object.keys(productObj).forEach((key) => {
          expect(record[key]).toEqual(productObj[key]);
          expect(results.status).toBe(201);
        });
      });
  });

  it('get() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .get(`/api/v1/categories/${data.body._id}`)
          .then((record) => {
            expect(record.body.name).toEqual(categoryObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('get() a product', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .get(`/api/v1/products/${data.body._id}`)
          .then((record) => {
            expect(record.body.name).toEqual(productObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('update() a category', () => {
    let newObj = {
      name: 'new category',
      display_name: 'cameras',
      description: 'cameras description',
    };
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .put(`/api/v1/categories/${data.body._id}`)
          .send(newObj)
          .then((record) => {
            expect(record.body.name).toEqual(newObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('update() a product', () => {
    let newObj = {
      name: 'new product',
      display_name: 'laptobs',
      description: 'laptobs description',
      category: 'new one for laptobs',
    };
    return mockRequest
      .post('/api/v1/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .put(`/api/v1/products/${data.body._id}`)
          .send(newObj)
          .then((record) => {
            expect(record.body.name).toEqual(newObj.name);
            expect(record.status).toBe(200);
          });
      });
  });

  it('delete() a category', () => {
    return mockRequest
      .post('/api/v1/categories')
      .send(categoryObj)
      .then((data) => {
        return mockRequest
          .delete(`/api/v1/categories/${data.body._id}`)
          .then(() => {
            return mockRequest
              .get(`/api/v1/categories/${data.body._id}`)
              .then((record) => {
                expect(record.body).toEqual('');
                expect(record.status).toBe(200);
              });
          });
      });
  });

  it('delete() a category', () => {
    return mockRequest
      .post('/api/v1/products')
      .send(productObj)
      .then((data) => {
        return mockRequest
          .delete(`/api/v1/products/${data.body._id}`)
          .then(() => {
            return mockRequest
              .get(`/api/v1/products/${data.body._id}`)
              .then((record) => {
                expect(record.body).toEqual('');
                expect(record.status).toBe(200);
              });
          });
      });
  });
});
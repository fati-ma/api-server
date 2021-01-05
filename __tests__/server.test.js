'use strict';

const server = require('../lib/server');

const supertest = require('supertest');
const mockRequest = supertest(server.server);

describe('Web Server' , ()=>{

  describe('products Routing', ()=>{

    let consoleSpy ;

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('route:/products method:GET >> should response 200',()=>{
      return mockRequest.get('/products').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/products/:id method:GET >> should response 200',()=>{
      return mockRequest.get('/products/1').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/products method:POST >> should response 201',()=>{
      return mockRequest.post('/products').then(result=>{
        expect(result.status).toBe(201);
      });
    });
    it('route:/products/:id method:PUT >> should response 201',()=>{
      return mockRequest.put('/products/:id').then(result=>{
        expect(result.status).toBe(201);
      });
    });

    it('route:/products/:id method:DELETE >> should response 202',()=>{
      return mockRequest.delete('/products/:id').then(result=>{
        expect(result.status).toBe(202);
      });
    });
  });

  describe('category Routing', ()=>{

    let consoleSpy ;

    beforeEach(()=> {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(()=> {
        consoleSpy.mockRestore();
    });

    it('route:/categories method:GET >> should response 200',()=>{
      return mockRequest.get('/categories').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/categories/:id method:GET >> should response 200',()=>{
      return mockRequest.get('/categories/1').then(result=>{
        expect(result.status).toBe(200);
      });
    });
    it('route:/categories method:POST >> should response 201',()=>{
      return mockRequest.post('/categories').then(result=>{
        expect(result.status).toBe(201);
      });
    });
    it('route:/categories/:id method:PUT >> should response 201',()=>{
      return mockRequest.put('/categories/1').then(result=>{
        expect(result.status).toBe(201);
      });
    });
 
    it('route:/categories/:id method:DELETE >> should response 202',()=>{
      return mockRequest.delete('/categories/:id').then(result=>{
        expect(result.status).toBe(202);
      });
    });
  });
});
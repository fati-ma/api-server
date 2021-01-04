'use strict';

const server = require('../lib/server');

const supertest = require('supertest');
const mockRequest = supertest(server.server);

describe('404 middleware', () => {
  it('route:/fatima method:get >> should response 404', () => {
    return mockRequest.get('/fatima').then((result) => {
      expect(result.status).toBe(404);
    });
  });
});
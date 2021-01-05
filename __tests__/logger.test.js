'use strict';

const logger = require('../middleware/logger');

describe('Logger middleware', () => {

  let consoleSpy;

  beforeEach(() => {
      consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterEach(() => {
        consoleSpy.mockRestore();
    });

    const req = {};
    const res = {};
    const next = jest.fn();

  it('properly logs request', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  });
  it('can move to the next middleware', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
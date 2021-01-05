'use strict';

require('@code-fellows/supergoose');

const categoryModule = require('../lib/models/categories/categories-collection');

describe('Category Model', () => {
    let categoryObj = { name: 'test', display_name: 'test', description: 'test' };
    it('it can post()', () => {
      return categoryModule.create(categoryObj).then(records => {
        Object.keys(categoryObj).forEach(key => {
          expect(records[key]).toEqual(categoryObj[key]);
        });
      });
    });
    it('it can get()', () => {
      return categoryModule.get().then(result => {
        Object.keys(categoryObj).forEach(key => {
          expect(result[0][key]).toEqual(categoryObj[key]);
        });
      });
    });
    it('it can get(id)', () => {
      return categoryModule.create(categoryObj).then(result => {
        return categoryModule.get(result._id).then(item => {
          Object.keys(categoryObj).forEach(key => {
            expect(item[0][key]).toEqual(categoryObj[key]);
          });
        });
      });
    });
    it('it can update()', () => {
      const updateObject = { name: 'test2', display_name: 'test2', description: 'test2' };
      return categoryModule.create(categoryObj).then(result => {
        return categoryModule.update(result._id, updateObject).then(item => {
          return categoryModule.get(result._id).then(item => {
            Object.keys(updateObject).forEach(key => {
              expect(item[0][key]).toEqual(updateObject[key]);
            });
          });
        });
      });
    });
    it('it can delete()', () => {
      return categoryModule.create(categoryObj).then(result => {
        return categoryModule.delete(result._id).then(() => {
          return categoryModule.get(result._id).then((result)=>{
            expect(result[0]).toBeUndefined();
          });
        });
      });
    });
});
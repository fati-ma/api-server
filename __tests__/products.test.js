'use strict';

require('@code-fellows/supergoose');

const productModule = require('../lib/models/products/products-collection');


describe('Product Model', () => {
    let productObj = { 
        name: 'test', 
        display_name: 'test', 
        description: 'test', 
        category: 'test' 
    };
    it('it can post()', () => {
        return productModule.create(productObj).then(records => {
            Object.keys(productObj).forEach(key => {
                expect(records[key]).toEqual(productObj[key]);
            });
        });
    });
    it('it can get()', () => {
        return productModule.get().then(result => {
            Object.keys(productObj).forEach(key => {
                expect(result[0][key]).toEqual(productObj[key]);
            });
        });
    });
    it('it can get(id)', () => {
        return productModule.create(productObj).then(result => {
            return productModule.get(result._id).then(item => {
                Object.keys(productObj).forEach(key => {
                    expect(item[0][key]).toEqual(productObj[key]);
                });
            });
        });
    });
    it('it can update()', () => {
        const updateObj = { name: 'test2', display_name: 'test2', description: 'test2', category: 'test2' };
        return productModule.create(productObj).then(result => {
            return productModule.update(result._id, updateObj).then(item => {
                return productModule.get(result._id).then(item => {
                    Object.keys(updateObj).forEach(key => {
                        expect(item[0][key]).toEqual(updateObj[key]);
                    });
                });
            });
        });
    });
    it('it can delete()', () => {
        return productModule.create(productObj).then(result => {
            return productModule.delete(result._id).then(() => {
                return productModule.get(result._id).then((result) => {
                    expect(result[0]).toBeUndefined();
                });
            });
        });
    });
}); 
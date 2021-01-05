'use strict';

class Model {

    constructor(schema) {
        this.schema = schema;
    }

    create(record) {
        let newRecord = new this.schema(record);
        return newRecord.save();
    }

    get(id) {
        let obj = id ? {id} : {};
        return this.schema.find(obj); // [{}]
    }

    update(id, record) {
        return this.schema.findByIdAndUpdate(id, record);
    }

    delete(id) {
        return this.schema.findByIdAndDelete(id);
    }
}

module.exports = Model;
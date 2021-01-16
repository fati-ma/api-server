'use strict';

const express = require('express');
const categoryModel = require('../lib/models/categories/categories-collection');
const router = express.Router();

// category routes 
router.post('/', async (req, res) => {
    // let id = req.params.id;
    let { name, display_name, description } = req.body;
    let record = { description: description, name: name, display_name: display_name };
    await categoryModel.create(record);
    res.status(201).json(record);
});

router.get('/', async (req, res) => {
    const obj = await categoryModel.get();
    res.status(200).json(obj);
});

// const id = req.params.id;
// categoryModel.get(id).then(data => {
//     res.status(200).json(data);
// }).catch(next);

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let record = await categoryModel.get(id);
    res.status(200).json(record[0]);
});

router.put('/:id', async (req, res) => {
    let { name, display_name, description } = req.body;
    let record = { description: description, name: name, display_name: display_name };
    let id = req.params.id;
    await categoryModel.update(id, record);
    res.status(201).json(record[0]);
    // res.redirect(`/categories/${id}`);
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await categoryModel.delete(id);
    res.status(202).json({});
});

module.exports = router;
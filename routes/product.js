'use strict';

const express = require('express');
const productModel = require('../lib/models/products/products-collection');
const router = express.Router();

// products routes 
router.post('/', async (req, res) => {
    let { category, name, display_name, description } = req.body;
    let record = { category: category, name: name, display_name: display_name, description: description };
    await productModel.create(record);
    res.status(201).json(record);
});

// router.get('/', async (req, res) => {
//     const obj = await productModel.read();
//     res.status(200).json(obj);
// });

router.get('/:id', async (req, res) => {
    let id = req.params.id;
    let record = await productModel.get(id);
    res.status(200).json(record[0]);
});

router.put('/:id', async (req, res) => {
    let { category, name, display_name, description } = req.body;
    let record = { category: category, name: name, display_name: display_name, description: description };
    let id  = req.params.id;
    await productModel.update(id, record);
    res.redirect(`/products/${id}`);
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id;
    await productModel.delete(id);
    res.status(202).json({});
});

module.exports = router;
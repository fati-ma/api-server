'use strict';

const express = require('express');

const router = express.Router();
const productsModel = require('../lib/models/products/products-collection.js');
const categoriesModel = require('../lib/models/categories/categories-collection.js');
const notesModel = require('../lib/models/notes/notes-collection.js');

router.param('model', getModel);

router.get('/api/v1/:model', handleGetItems);
router.get('/api/v1/:model/:id', handleGetOneItem);
router.post('/api/v1/:model', handlePostItems);
router.put('/api/v1/:model/:id', handleUpdateItems);
router.delete('/api/v1/:model/:id', handleDeleteItems);

function getModel(req, res, next) {
    const model = req.params.model;
    switch (model) {
        case 'categories':
            req.model = categoriesModel;
            break;
        case 'products':
            req.model = productsModel;
            break;
        case 'todo':
            req.model = notesModel;
            break;
        default:
            throw new Error('Invalid Model');
    }
    next();
}

function handlePostItems(req, res, next) {
    req.model
        .create(req.body)
        .then((data) => {
            res.status(201).json(data);
        })
        .catch(next);
}

function handleGetItems(req, res, next) {
    // let id = req.params.id;
    req.model
        .get()
        .then((results) => {
            const count = results.length;
            res.status(200).json({ count, results });
        })
        .catch(next);
}
function handleGetOneItem(req, res, next) {
    let id = req.params.id;
    req.model
        .get(id)
        .then((data) => {
            res.status(200).json(data[0]);
        })
        .catch(next);
}
function handleUpdateItems(req, res, next) {
    let id = req.params.id;
    req.model.update(id, req.body).then(() => {
        req.model
            .get(id)
            .then((data) => {
                res.status(200).json(data[0]);
            })
            .catch(next);
    });
}
function handleDeleteItems(req, res, next) {
    let id = req.params.id;
    req.model.delete(id).then(() => {
        req.model
            .get()
            .then((data) => {
                const count = data.length;
                res.status(200).json({ count, data });
            })
            .catch(next);
    });
}

module.exports = router;
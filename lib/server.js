'use strict';

const express = require('express');
const app = express();

// --------------------------- MIDDLEWARES ---------------------

const timestamp = require('../middleware/timestamp');
const logger = require('../middleware/logger');
const notFound = require('../middleware/404');
const errorHandler = require('../middleware/500');
require('dotenv').config();
// let jsonData = require('../data /db.json');

// Global Middleware
app.use(express.json());
app.use(timestamp);
app.use(logger);

//DB
let products = [];
let catgories = [];


// --------------------- Products ---------------------

app.post('/products', (req, res) => {
    let { id, name, category, display_name, description } = req.body;
    let record = {
        id: id,
        name: name,
        category: category,
        display_name: display_name,
        description: description
    }

    products.push(record);
    res.status(201).json(record);
})

app.get('/products', (req, res) => {
    let count = products.length;
    let result = products;
    res.status(200).json({ count, result });
})

app.get('/products/:id', (req, res) => {
    let Id = req.params.id;
    let record = products.filter((record) => record.id == Id);
    res.status(200).json(record[0]);
})


app.put('/products/:id', (req, res) => {
    
    let { name, category, display_name, description } = req.body;
    let Id = req.params.id;
    const record = products.filter((record) => record.id == Id);
    const result = record.map((item) => {
        item.id = Id;
        item.name = name;
        item.category = category;
        item.display_name = display_name;
        item.description = description;
    });
    res.status(201).json(result[0]);
    // res.redirect(`/products/${Id}`);

})

app.delete('/products/:id', (req, res) => {
    let Id = req.params.id;
    catgories.forEach((record, idx) => {
      if (record.id == Id) {
        catgories[idx] = {};
        catgories = catgories.filter(record => {
          return Object.keys(record).length !== 0;
        });
      }
    });
    res.status(202).json({});
    // res.redirect('/products');
})


// -------------- Categoties ----------------------

app.post('/categories', (req, res) => {
    let { name, display_name, description, id } = req.body;
    let record = {
        name: name,
        display_name: display_name,
        description: description,
        id: id
    }

    catgories.push(record);
    res.status(201).json(record);
})

app.get('/categories', (req, res) => {
    let count = catgories.length;
    let result = catgories;
    // let categoryObj = { 
    //     count: catgories.length, 
    //     result: catgories 
    // };
    res.status(200).json({ count, result });
})

app.get('/categories/:id', (req, res) => {
    let Id = req.params.id;
    let record = catgories.filter((record) => record.id == Id);
    res.status(200).json(record[0]);
})


app.put('/categories/:id', (req, res) => {
    
    let { name, display_name, description } = req.body;
    let Id = req.params.id;
    const record = catgories.filter((record) => record.id == Id);
    const result = record.map((item) => {
        item.name = name;
        item.display_name = display_name;
        item.description = description;
        item.id = Id
    });
    res.status(201).json(result[0]);
    // res.redirect(`/products/${Id}`);

})

// app.delete('/categories/:id', (req, res) => {
//     let Id = req.params.id;
//     db.filter((record) => record.id == Id);
//     let result = [];
//     catgories.forEach((record,idx)=>{
//         if(record.id != Id)
//             result.push(record);
//     })
//     catgories = result;
//     res.status(201).json({});
//     // res.redirect('/products');
// })

app.delete('/categories/:id', (req, res) => {
    let Id = req.params.id;
    catgories.forEach((record, idx) => {
      if (record.id == Id) {
        catgories[idx] = {};
        catgories = catgories.filter(record => {
          return Object.keys(record).length !== 0;
        });
      }
    });
    res.status(202).json({});
  });


app.put('/error', (req, res) => {
    throw new Error('a test error');
  });


app.use('*', notFound);
app.use(errorHandler);


module.exports =
{
    server: app,
    start: port => {
        let PORT = port || process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Listening on PORT: ${PORT}`);
        })
    }
}
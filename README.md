
# Api Server

### Author: Fatima Atieh


## Swagger Documentation

[Swagger documentation that was created at Swagger Hub](https://app.swaggerhub.com/apis/fati-ma/api-server/0.1#/)



## Setup

`npm init -y`

`npm i express dotenv jest supertest mogoose @code-fellows/supergoose  morgan cors`

Add `PORT` in `.env`

Add `MONGODB_URI` in `.env`

start the server:
  - `node index.js`
  - `nodemon`
  - `npm start`


## Endpoints

    - http://localhost:3000/products
    - http://localhost:3000/products/1
    - http://localhost:3000/products/1
    - http://localhost:3000/products/1
    - http://localhost:3000/categories
    - http://localhost:3000/categories/1
    - http://localhost:3000/categories/1
    - http://localhost:3000/categories/1



## Test

  - Manual
    - GET ALL: GET - http://localhost:3000/products
    - GET ONE: GET - http://localhost:3000/products/1
    - UPDATE ONE: PUT - http://localhost:3000/products/1
    - DELETE ONE: DELETE - http://localhost:3000/products/1
    - GET ALL: GET - http://localhost:3000/categories
    - GET ONE: GET - http://localhost:3000/categories/1
    - UPDATE ONE: PUT - http://localhost:3000/categories/1
    - DELETE ONE: DELETE - http://localhost:3000/categories/1

  - jest
    - `npm test`



## UML     

![api-class7](img/api-server-2.png)




'use strict';

module.exports = (req,res,next)=>{
    let timestamp = Date.now();
    req.requestTime = new Date(timestamp).toString();
    next();
}
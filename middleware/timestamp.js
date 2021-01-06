'use strict';

module.exports = (req,res,next)=>{
    let timestamp = Date.now();
    req.requestTime = new Date(timestamp).toString();
    next();
}

// 'use strict';

// function requestTime(req, res, next) {
//   req.requestTime = new Date().toDateString();
//   console.log(req.requestTime);
//   next();
// }

// module.exports = requestTime;
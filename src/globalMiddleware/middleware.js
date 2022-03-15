const jwt = require("jsonwebtoken")
const authenticate = function(req, req, next) {
    let token= req.headers["x-api-key"]
    if(!token) return res.send({status: false,msg:"token must be present"})
    let decodedToken= jwt.verify(token,"functionup-thorium")
    if(!decodedToken) return res.send({status: false,msg:"Invalid token"})
    //check the token in request header
    //validate this token
    
    next()
}


const authorise = function(req, res, next) {
    let decodedToken =jwt.verify(req.headers["x-api-key"],"functionup-thorium")
    if(decodedToken.userId !=req.params.userId) return res.send({msg:"You are not allowed to  make changes in the data"})
    
    // comapre the logged in user's id and the id in request
    next()
}
module.exports.authenticate= authenticate
module.exports.authorise= authorise

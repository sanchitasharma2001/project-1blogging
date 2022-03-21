const authorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken")
const createAuthor = async function (req,res){
       try {
        let data = req.body
        if(!data){
          res.status(400).send({status:false, msg:"Bad request"})
        }else{
          let savedata  = await authorModel.create(data)
          res.status(201).send({status:true, msg:savedata})
        }
      } catch (error) {
        res.status(500).send({status:false,  error:error.message})
      }
    }
    
    module.exports.createAuthor = createAuthor
const authorModel = require("../models/authorModel")

const createAuthor = async function (req, res) {
    try{
    let data = req.body
    if(data){
    let savedData = await authorModel.create(data)
     return res.status(200).send({ msg: savedData })
    }
    else{return res.status(400).send({msg:"Bad request"})}
    }catch(err){return res.status(500).send({Error:err.message})}

}
module.exports.createAuthor = createAuthor

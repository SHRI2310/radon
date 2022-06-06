  const models = require('../models/models')
  let createbook = async function(req,res){
      let postbody =req.body
      let savebook= await models.create(postbody)
 res.send ({"msg":savebook})
  }


  module.exports.addbook=createbook
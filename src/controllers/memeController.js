const axios = require('axios')

let memeGet = async function (req,res){
    try{ 
    
        let options ={
            method:"get",
            url:"https://api.imgflip.com/get_memes"
        }
      let result = await axios(options);
      res.status(200).send({msg:result.data})
    }catch(error){
        console.log(error);
        res.status(500).send({msg:error.message})
    }
}

let createMeme = async function (req,res){
    try{
    //  let id = req.query.template_id;
    //  let text0 = req.query.text0;
    //  let text1= req.query.text1
    //  let username = req.query.username
    //  let password = req.query.password
        let options ={
            method: "post",
            url:`https://api.imgflip.com/caption_image?template_id=110163934&text0=He must be Thinking Of other Girls&text1= Me:-How Can I Make her Happy&username=shri23&password=pass1234@`
        }
        let result = await axios(options);
        res.status(200).send({msg:result.data})

    }catch(error){
        console.log(error)
        res.status(500).send({ msg: err.message })
    }
}


















module.exports.memeGet=memeGet
module.exports.createMeme=createMeme
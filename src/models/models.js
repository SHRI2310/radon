const mongo = require('mongoose')
const bookschema = new mongo.Schema({
    "bookname":String,
    "authorname": String,
    "category":String,
    "year":Number,


},{timestamps:true})

module.exports= mongo.model("book",bookschema)

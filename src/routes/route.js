const express = require('express');
const lodash = require ('lodash')

const shrimodule = require('../logger/logger')
const shri2module = require('./../util/helper')
const shri3module = require('./../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    shrimodule.welcomeMsg('Welcome to my application. Iam SHRIKANT AJMIRE and a part of functionUp Radon 2 cohort')
    shri2module.date()
    shri2module.month()
    shri2module.getBatchInfo()
    shri3module.trimit("    FUNCTIION UP IS GREAT        ")
    shri3module.uppertolower("function up is great")
    // shri3module.toLower('FUNCTIION UP IS GREAT')

    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    
    
    let arr1 = lodash.chunk(["january","february","march","april","may","june","july","august","september","octomber","november","december"] ,2)
    console.log("here i applied function chunk      "+arr1)


let num =[1,3,5,7,9,11,13,15,17,19]
let tail= lodash.tail(num)
console.log( "here i applied function tail   "+tail)

let duplicatenum =[1,5,3,5,6,7,2,1,4,1,3,6,7]
let unionnum = lodash.union(duplicatenum)
console.log("here i applied function union    "+unionnum)


let movies = [["horror","theshining"],["drama","titanic"],["thrilller","shutter island"],["fantasy","pans labyrinth" ]]
 let frompairs = lodash.fromPairs(movies)
 console.log("here i applied function frompairs  "+JSON.stringify(fromparis))

     
    res.send('my array !')
});



























module.exports = router;
// adding this comment for no reason
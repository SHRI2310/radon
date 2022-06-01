const express = require('express');

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

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});
router.get('/shrikant', function (req, res) {

    res.send("hello world")
})

module.exports = router;
// adding this comment for no reason
const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", UserController.createUser  )

router.get("/getUsersData", UserController.getUsersData)

router.get("/getBooksData", BookController.getBooksData)

router.post("/createBook", BookController.createBook  )//1stque



router.get("/booklist", BookController.booklist)//2ndque

router.post("/getbookinyear", BookController.getbookinyear  )//3rdque

router.get("/getxinrbooks", BookController.getxinrbooks)//5que

router.get("/getrandombooks", BookController.getrandombooks)//6ue


module.exports = router;
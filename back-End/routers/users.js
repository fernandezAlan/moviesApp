const express = require('express');
const router = express.Router();
const Users = require("../models/users")

router.post("/add",function(req,res){
    Users.create(req.body).then(function(){
        res.redirect("/login")
    })
})
router.get("/all",function(req,res){
    Users.findAll()
    .then(function(users){
        console.log(users)
        res.send(users)
    })
})

module.exports= router
const express = require('express');
const router = express.Router();
const path = require("path")
const passport = require('passport');

router.get("/",function(req,res){
    res.redirect("/login")
    })
router.post('/logout', (req, res) => {
    console.log("entro al logout")
        if (req.isAuthenticated()) {
            console.log("SE DESLOGUEO!")
          req.logout();
          res.redirect('/login')
        } else {
          res.send('necesitas estar logueado!')
        }
      })

router.get("/login",function(req,res){
        res.sendFile(path.join(__dirname, '../../public', 'loggin.html'));
    })
router.post("/login",passport.authenticate("local"),function(req,res){
      console.log('USER', req.user)
      res.redirect("/movies")
    })
    
router.get("/createUser",function(req,res){
      res.sendFile(path.join(__dirname, '../../public', 'userCreate.html'));
    })



module.exports= router;
var express = require('express');
var router = express.Router();
var userlogin = require("../controllers/loginController");

router.get('/',(req,res)=>{
    res.render('login');
}) 

router.get('/registration',(req,res)=>{
    res.render('registration');
})
router.get('/deletePassword',(req,res)=>{
    res.render('deleteuser');
})
router.get('/editPassword',(req,res)=>{
    res.render('editpassword');
})
router.get('/homepage',(req,res)=>{
    res.render('homepage');
})

router.post('/login',(req,res)=>{
    // console.log("hi"+req.body);
    userlogin.login(req, res);
});

router.post('/registrationInsert',(req,res)=>{
    console.log(req.body);
    userlogin.userInsert(req, res);
});

router.post('/updatePassword',(req,res)=>{
    console.log(req.body);
    userlogin.update(req, res);
});

router.post('/deletePassword',(req,res)=>{
    console.log(req.body);
    userlogin.delete(req, res);
});


module.exports = router;
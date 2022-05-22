var userlogin = require("../model/login.js");





exports.login = function (req, res, next) {
    console.log(req.body);
    if (req.method == "POST") {
        var user = {};
       user.email = req.body.email;
       user.password = req.body.password;
       console.log(user);
        userlogin.login(user, function (err, data) {
            console.log(data);
            if (!err) {
                if (data) {
                    res.render('userlogin.ejs',{data:data})

                }
                else {

                    res.render('login.ejs');
                }
            } else {
                res.render('login.ejs');
            }
        });
    } else {
        res.render('login.ejs');
    }
};


exports.userInsert = function (req, res, next) {

    let data = req.body;
    console.log('Insert');
    console.log(data);

    userlogin.createNewUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};



exports.update = function (req, res, next) {

    let data = req.body;
    console.log('Insert');
    console.log(data);

    userlogin.updateUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};


exports.delete = function (req, res, next) {

    let data = req.body;
    console.log('Insert');
    console.log(data);

    userlogin.deleteUser(data, function (err, result) {
        if(err){
            console.log(err);
        }else{
            res.end(JSON.stringify(result))
        }
    });
};


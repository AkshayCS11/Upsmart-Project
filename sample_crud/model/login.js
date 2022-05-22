var alert = require('alert');
var dbconnection = require('../config/db.js');


exports.login = function (req, res) {
//   console.log(req);
    try {

        dbconnection.query("select * from users where email = '"+req.email+"' and password = '"+req.password+"';",function (err, rows){
            if (err) {
                return res(err, null);
            }
            if (rows !== undefined) {
                // console.log(rows);
                return res(null, rows);
                
            }
            else { return res(err = new Error('undefined'), null) }

        });
    }
    catch (e) {
        return res(e, null);;
    }
};

exports.createNewUser = function (req, res, next) {
    try {
        var data = {};
        var firstname= req.firstname;
        var lastname= req.lastname;
        var email = req.email;
        var phone = req.phone;
        var password = req.password;
        var cnfrmpassword = req.cnfrmpassword
    

        data.firstname = firstname;
        data.lastname = lastname;
        data.email = email;
        data.phone= phone;
        data.password = password;
      
        if(password!==cnfrmpassword){
            alert("Password Mismatch")
        }
        else{
        dbconnection.query("insert into users set ?", [data], function (err, result) {
            
            if (err) throw err;
            console.log("1 record inserted");
            
            if (result !== undefined) {
                data.result = result;
                return res(null, data);
            }
            else { return res(error = new Error('404'), undefined) }
        });
    }}
    catch (e) {
        console.log(e);
        return res(error = e, null);
    }
};

exports.updateUser = function (req, res, next) {
    try {
        var data = {};
        var email = req.email;
        var password = req.resetPassword;

        data.user_name = email;
        data.password = password;


        dbconnection.query("UPDATE users set password ='"+password+"' WHERE user_name = '"+email+"';", function (err, result) {
            if (err) throw err;
            console.log("Data updated");
            if (result !== undefined) {
                data.result = result;
                return res(null, data);
            }
            else { return res(error = new Error('404'), undefined) }
        });
    }
    catch (e) {
        console.log(e);
        return res(error = e, null);
    }
};

exports.deleteUser = function (req, res, next) {
    try {
        var data = {};
        var email = req.email;
        var password = req.password;

        data.user_name = email;
        data.password = password;


        dbconnection.query("delete from users WHERE user_name = '" + data.user_name +"' AND password ='"+ data.password +"';", function (err, result) {
            if (err) throw err;
            console.log("No user matches");
            if (result !== undefined) {
                data.result = result;
                return res(null, data);
            }
            else { return res(error = new Error('404'), undefined) }
        });
    }
    catch (e) {
        console.log(e);
        return res(error = e, null);
    }
};
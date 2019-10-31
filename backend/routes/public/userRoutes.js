      //packages
      const express       = require('express'),
            router        = express.Router(),
            config        = require('../../config'),
            User          = require('../../models/userModel'),
            jwt           = require('jsonwebtoken'),
            bcrypt        = require('bcrypt'),
            mkdirp        = require('mkdirp'),
            
      //helpers
            magicFun      = require('../../../utils/magicFunctions'),
            emailRegexp   = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

//Sign Up
router.post('/signUp', (req, res) => {

    var { username, password, email, nameSurname } = req.body;

    var validation = [];

        if(username == "" || username.length < 4 || username.length > 15){
            validation.push("En az 4 en fazla 15 karakterli kullanıcı ismi giriniz.")
        }
        if(password == "" || password.length < 6 || password.length > 15){
            validation.push("En az 6 en fazla 15 karakterli şifre giriniz.")
        }
        if(emailRegexp.test(email) == false){
            validation.push("Geçerli bir e posta adresi giriniz.")
        }
        if(nameSurname == ""){
            validation.push("İsim soyisminizi doldurunuz.")
        }

        if(validation != ""){
            res.json({success:false, message: validation})
        } else {
            
    const newUser = new User({
        username,
        password : bcrypt.hashSync(password, 10),
        email,
        nameSurname
    });

    console.log("Kaydedilecek " + newUser);

    User
    .register(newUser, password)
    .then((savedUser) => {
        console.log("Kaydedilen Kullanıcı: " + savedUser);  
        var token = jwt.sign({userId: savedUser._id}, config.token);
        res.json({ success: true, message: "Tamam", token});
    })
    .catch((err) => {
        var errorMessages = [];
            if(err.name == 'UserExistsError'){
                errorMessages.push("Girdiğiniz kullanıcı adı daha önce alınmış!")
            } else {
                errorMessages.push("Girdiğiniz E-posta adresine ait bir hesap var!")
            }
            res.json({success: false, message: errorMessages});
    });
    }
});

//Login
router.post('/login', (req, res) => {
    var { email, password } = req.body;

    User
    .findOne({email})
    .then((user) => {
        if(!user)
        res.json({success: false, message: "Yanlış e-mail adresi girdiniz."})  
        else
        console.log(user);
        if(bcrypt.compareSync(password, user.password)){
            var token = jwt.sign({userId: user._id}, config.token);
            res.json({success:true, message:"Giriş Başarılı", token});
        } else {
            console.log("Yanlış şifre girdiniz.");
            res.json({success:false, message:"Yanlış şifre girdiniz."});
        }            
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = router;
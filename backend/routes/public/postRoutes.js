      //packages
      const express       = require('express'),
            router        = express.Router(),
            Post          = require('../../models/postModel'),
            path          = require('path'),
            mkdirp        = require('mkdirp');


router.get('/', (req, res) => {
    res.json({message: "Okey"});
    console.log("Okey");
});












module.exports = router;
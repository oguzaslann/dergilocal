      //packages
      const express       = require('express'),
            router        = express.Router(),
            config        = require('../../config'),
            Post          = require('../../models/postModel'),
            jwt           = require('jsonwebtoken');

router.get('/getPosts', (req, res) => {

  Post
  .find({})
  .then((posts) => {
    res.json(posts)
  })
  .catch((err) => {
    console.log(err);
  });

});

router.post('/add', (req, res) => {
        let title         = req.body.title,
            urlTitle      = req.body.urlTitle,
            type          = "article",
            content       = req.body.editordata,
            user          = {username:'oguzaslan'};

            
        let newPost     = {title, urlTitle, type, content, user};
        Post
        .create(newPost)
        .then((newPost) =>{
            console.log(newPost);
            res.json(newPost);
        })
        .catch((err) => {
          console.log("Hata Error");
          console.log(err);
        })
});

module.exports = router;
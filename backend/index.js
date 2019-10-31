//packages
const  mongoose             = require("mongoose"),
       express              = require("express"),
       bodyParser           = require("body-parser"),
       fileUpload           = require('express-fileupload'),
       dateFormat           = require('dateformat'),
       app                  = express(),

//object
      publicPostRoutes      = require('./routes/public/postRoutes'),
      publicUserRoutes      = require('./routes/public/userRoutes'),
      userPostRoutes        = require('./routes/user/postRoutes');


      app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });

//App Config
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 }
  }));
app.use(express.static('public'));
app.use('/articles', express.static('public'));
app.use('/:username', express.static('public'));
app.use('/admin', express.static('public'));
app.set('view engine', 'ejs');

//DB Config
mongoose.connect("mongodb://localhost/dergilocal", { useNewUrlParser: true, useUnifiedTopology:true });
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//Date Config
dateFormat.i18n = {
  dayNames: [
    'Pzr', 'Pzt', 'Sal', 'Çrş', 'Per', 'Cum', 'Cts',
    'Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'
  ],
  monthNames: [
    'Ock', 'Şbt', 'Mrt', 'Nis', 'Mys', 'Haz', 'Tem', 'Ağs', 'Eyl', 'Ekm', 'Kas', 'Arl',
    'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'
  ],
  timeNames: [
    'a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'
  ]
};

app.use(publicPostRoutes);
app.use(publicUserRoutes);

app.use(userPostRoutes);

//Listen Port
const server = app.listen(8000, (err)=>{
  if(err){
      console.log(err);
  }
  console.log('App started. Port number : %d', server.address().port);
});
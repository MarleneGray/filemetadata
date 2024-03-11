var express = require('express');
var cors = require('cors');
var multer = require('multer');
const { urlencoded } = require("body-parser"); //to get the post result from the html and more
const upload = multer({ dest: 'uploads/' })
require('dotenv').config()

var app = express();

app.use(cors());
//app.use(multer);
app.use('/public', express.static(process.cwd() + '/public'));
app.use(express.urlencoded({ extended: true })); // In short this makes req.body possible

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), function (req, res){
//var request = req.body;
console.log("req file", req.file || "nothing to print");
res.json({name: req.file.originalname , type: req.file.mimetype , size: req.file.size });

})


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

var express    = require("express");
var app = express();
app.set('view engine', 'ejs');



///ENABLE CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


var bookRoutes  = require ('./bookRoutes');

app.get("/",function(req,res){
  res.render('pages/index');
})


//We add a subdomain name
app.use('/api', bookRoutes)


const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
  console.log("Server started.......");
});

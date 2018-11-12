var mysql  = require('mysql');

//Connect to the DATABASE
var connection = mysql.createConnection({
  host     : '140.118.110.32',
  port : '53306',
  user     : 'ws_user',
  password : 'ws_fall108',
  database : 'ilibrary_hw'
});


// var connection = mysql.createConnection({
//   host     : 'localhost',
//     user     : 'root',
//   password : '',
//   database : 'book'
// });


connection.connect(function(err){
  if(!err) {
    console.log("Database is connected ... ");
  } else {
    console.log("Error connecting database ... ");
  }
});

///MODEL
exports.getBooks = function getBooks (req,res) {
  var objs=[]
  objs.push({error:false})
  objs.push({Message:''})
  connection.query('SELECT * FROM book', function(err, rows, fields) {  ///SQL QUERRY
    for (var i = 0;i < rows.length; i++) {
      objs.push({"Books": rows[i]});  ///WE DISPLAY EVERY ROW
    }
    if (objs == null || objs == 'undefined' || objs.length == 0)
    {
      objs[1]={Message:'This is empty'}
      res.status(404).end(JSON.stringify(objs));
    }
    if(err) {
      objs[0]={error:true}
      res.status(500);
      return next(err);
    }
    res.status(200).end(JSON.stringify(objs));
    return objs;
  })};

  exports.getBooksbyID = function getBooksbyID (req,res,next) {
    var objs=[]
    objs.push({error:false})
    objs.push({Message:''})
    connection.query("SELECT * FROM book where id='" + req.params.id  + "'", function(err, rows, fields) {
      for (var i = 0;i < rows.length; i++) {
        objs.push({"Search": rows[i]});
      }
      if(err) {
        objs[0]=({error:true})
        res.status(500);
        return next(err);
      }
      if (objs == null || objs == 'undefined' || rows.length == 0)
      {
        objs[1]={Message : 'This is empty'}
        console.log(objs)
        res.status(404).end(JSON.stringify(objs));
      }else {      res.status(200).end(JSON.stringify(objs));}
    })};


    exports.deleteBooksbyID = function deleteBooksbyID (req,res) {
      var objs=[]
      objs.push({error:false})
      connection.query("DELETE FROM Book where id= "+ req.params.id + "" , function (err, result) {
        if (err) {
          objs[0]=({error:true})
          res.status(500);
        }
        objs.push({Message: 'Number of records deleted: ' + result.affectedRows})
        res.status(200).end(JSON.stringify(objs));
      })};


      exports.putBoosbyID = function putBoosbyID (req,res) {
        connection.query('UPDATE INTO Book SET title= ' + req.body.title  + ' where id= "+ req.params.id + "', function(err, rows, fields) {
          if(err) {
            res.status(500);
          }
        })};

        exports.postBooks = function postBooks (req,res) {
          // console.log (req.body.title)
          connection.query('INSERT INTO Book (title, author, isbn,publisher,publication_year,last_modified_date,created_date) VALUES ('  + req.body.title  + ","+ req.body.author + ","+ req.body.isbn + ","+ req.body.publisher + ","+ req.body.publication_year + ","+ req.last_modified_date.la + ","+ req.body.created_date + ')', function(err, rows, fields) {
            if(err) {
              res.status(500);
            }
          })};

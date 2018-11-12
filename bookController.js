// Import contact model
Library = require('./bookModel');

//CONTROLLER

exports.getBooks = function getBooks (req,res)
{
Library.getBooks(req,res);

}

exports.postBooks = function postBooks (req,res)
{
Library.postBooks(req,res);

}

exports.deleteBooksbyID = function deleteBooksbyID (req,res)
{
Library.deleteBooksbyID(req,res);

}

exports.getBooksbyID = function getBooksbyID (req,res,next)
{
  if (isNaN(req.params.id)) { res.status(404).end(JSON.stringify({Message:'Wrong argument'})); return next() } ///Check if we receive an id
Library.getBooksbyID(req,res,next);

}
exports.putBoosbyID = function putBoosbyID (req,res)
{
Library.putBoosbyID(req,res);
}

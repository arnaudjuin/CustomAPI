Book = require('./bookController');
Authtoken = require('./auth/AuthController');
let router = require('express').Router();
Checktoken = require ('./auth/VerifyToken');

// API routes
router.route('/books')
.get(Book.getBooks)   ///METHOD GET
.post(Book.postBooks); ///METHOD POST

router.route('/books/:id')
.get(Book.getBooksbyID)
.put(Book.putBoosbyID)
.delete(Book.deleteBooksbyID);

router.route('/login')  ///AUTHENTIFICATION ROUTE
.get(Authtoken.login);


router.route('/logout')
.get(Authtoken.logout);

module.exports = router;

// PAS AUTHORISE MESSAGE + STATUS
// view 30 min
// report + c comment  30 min

// push
// git

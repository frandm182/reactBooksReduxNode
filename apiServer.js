var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

//APIs
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/reactnodebook',(err) => {
  if (err) {
    console.log("connect err")
  } else {
    console.log("connect ok") 
  }
});


var Books = require('./models/books.js');
//-------------->>>>>>>>>>POST BOOK <<<<<<<<<<<-------
app.post('/books', (req,res) => {
  var book = req.body;
  Books.create(book, (err, books) => {
    if(err) {
      throw err;
    }
    res.json(books)
  })
});
//-------------->>>>>>>>>>GET BOOK <<<<<<<<<<<-------
app.get('/books', (req, res) => {
  Books.find((err, books) => {
    if(err) throw err;
    res.json(books);
  })
})

//-------------->>>>>>>>>>DELETE BOOK <<<<<<<<<<<-------
app.delete('/books/:_id', (req, res) => {
  var query = { _id: req.params._id};
  
  Books.remove(query,(err, books) => {
    if(err) throw err;
    res.json(books);
  })
})

//-------------->>>>>>>>>>UPDATE BOOK <<<<<<<<<<<-------
app.put('/books/:_id', (req, res) => {
  var book = req.body;
  var query = { _id: req.params._id};
  console.log(book)
  var update = {
    '$set': {
      title: book.title,
      description: book.description,
      image: book.image,
      price: book.price
    }
  }

  var options = {new: true};  
  
  Books.findOneAndUpdate(query, update,options, (err, books) => {
    if(err) throw err;
    res.json(books);
  })
})
//END APIs
app.listen(3001, err => {
  if(err) {
    return console.log(err);
  }
  console.log('API listening on port 3001');
})

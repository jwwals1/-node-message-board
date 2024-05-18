var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

/* GET new page. */
router.get('/new', function(req, res, next){
  res.render('form', {title: 'Mini Message Board'})
})

/* form template */
router.post('/new', function(req, res, next) {
  const {messageAuthor, messageText} = req.body;
  messages.push({
    text: messageText,
    user: messageAuthor,
    added: new Date(),
  })
  res.redirect('/')
})

module.exports = router;

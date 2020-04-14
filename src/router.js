
var express = require('express');
var router = express.Router();


// GET /
router.get('/', function(req, res, next) {
  return res.sendFile(__dirname + '/views/index.html');
});

router.post('/Register', (req, res) => {
    return res.send("You are trying to register now");
})


module.exports = router;
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hello", (req,res)=>{
  res.send("Hello World");
})

router.get("/add/:first/and/:second",(req,res)=>{
  console.log(req.params.first + req.params.second);
  let firstNum=parseInt(req.params.first),
  secondNum=parseInt(req.params.second),
  pj=firstNum+secondNum;
  console.log(pj);
  res.json({"addResult":pj});
});


module.exports = router;

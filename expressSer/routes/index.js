var express = require('express');
var router = express.Router();
var cors = require('cors')

router.use(function(req, res, next) {
  // allow requests from any origin
  res.header('Access-Control-Allow-Origin', '*');

  // allow the following HTTP methods
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // allow the following request headers
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  next();
});


router.use(cors())
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hello", (req,res)=>{
  res.send("Hello World");
})

router.get("/add/:first/and/:sec",(req,res)=>{
  console.log(req.params.first, req.params.sec);
  console.log(req.params.first + req.params.sec);
  let firstNum=parseInt(req.params.first);
  let secondNum=parseInt(req.params.sec);
  pj=firstNum+secondNum;
  console.log(pj);
  res.json({"addResult":pj});
});


module.exports = router;

// require express
const express = require("express");
const path = require("path");
var cors = require('cors')


//load env variables
require('dotenv').config()

// create express router
const router = express();

router.use(express.urlencoded({ extended: true }))
router.use(cors());
router.use(express.urlencoded())
router.use(express.json())

// Import DB Connection
require("./config.js");

//serving frontend using middlewares
router.use(express.static(path.join(__dirname, "..", "dist")));
router.use(express.static("public"));
router.use('./uploads',express.static('uploads'))
// Import API route
var routes = require('./routes'); //importing route
routes(router);

// define port to run express router
const port = 3001;

// use middleware on express router
router.use(express.json());

// Add endpoint
router.get('/', (req, res) => {
  res.send("Welcome to our router");
});

router.get("/add/:first/and/:sec", (req, res) => {
  console.log(req.params.first + req.params.sec);
  let firstNum = parseInt(req.params.first);
  let secondNum = parseInt(req.params.sec);
  pj = firstNum + secondNum;
  console.log(pj);
  res.json({ "addResult": pj });
});

// Listen to server
router.listen(port, () => {

  console.log(`Server running at http://18.210.66.126:3001:${port}`);
});
module.exports = router;
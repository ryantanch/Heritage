var express = require("express");
var router = express.Router();
const db = require("../../database");


//--------------- Query for a single user -------------------------
router.get("/users/:id", function(req, res) {

  db.select()
    .from("FamilyMember")
    .where({ FamilyMemberID: req.params.id })
    .then(function(data) {
    
       res.send(data);
    });
});

router.get("/test-call",function(req,res){
  res.send("Data reach")
})

//--------------- Query for all user -------------------------

router.get("/users", function(req, res) {

  db.select()
    .from("FamilyMember")
    .then(function(data) {
    
       res.send(data);
    });
});







module.exports = router;

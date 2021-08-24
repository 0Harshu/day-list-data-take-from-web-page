//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

var items = ["note", "root", "mouse", "cpu"];
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {

  var today = new Date();
  var options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }
  var day = today.toLocaleDateString("en-us", options);
  res.render("list", {listDay: day, newListItems: items});
});

app.post("/", function(req, res){
 var item = req.body.newItem;//newItem is html <input type="text" name="newItem" >
 items.push(item);
 res.redirect("/");

})

app.listen(3000, function() {
  console.log("server is runing on port 3000.");
})

var express = require('express')
	app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true})) ;

app.set("view engine","ejs");

var friends = ["Tony","Tai","Gupta","Ganesh"];

app.get("/",function(req, res)
{
	res.render('home');
});

app.get("/friends",function(req, res)
{
	
	res.render("friends",{friends:friends});
});

app.post("/addfriend",function(req, res)
{
	var newFriend = req.body.name;
	friends.push(newFriend);
	res.redirect("/friends");
});

app.listen(3000,function(req, res){
	console.log('running the server');
});
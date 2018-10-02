var express = require('express');
var app=express();
app.set('view engine', 'ejs');

//app.use(express.static(__dirname + '/public'));

app.get('/privacypolicy/privacypolicy.html', function(req, res) {
	var botname="Translate-a-bot Facebook app"
    res.render('pages/privacy',{botname:botname});
});
app.get('/privacypolicy/placelookup_policy.html', function(req, res) {
	var botname="Place Lookup Messenger bot"
    res.render('pages/privacy',{botname:botname});
});
app.get('/privacypolicy/privacypolicybirdsbot.html', function(req, res) {
	var botname="Birds of a Feather Messenger bot"
    res.render('pages/privacy',{botname:botname});
});
app.get('/privacypolicy/myfbceleb_adatnyilatkozat.html', function(req, res) {
	var botname="My FB Celeb bot"
    res.render('pages/privacy_hun',{botname:botname});
});
app.get('/privacypolicy/adatnyilatkozat.html', function(req, res) {
	var botname="Ötöslottó bot"
    res.render('pages/privacy_hun',{botname:botname});
});

console.log('server started on localhost:80');
app.listen(80);
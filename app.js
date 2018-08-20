var express = require('express');
var app=express();

app.get('/privacy',function(req,res)
{
	res.send('<h1>Privacy policy</h1>');	
}
);

app.get('/*',function(req,res)
{
	res.send('<h1>Welcome</h1>');	
}
);


console.log('Server started on port 3000');
app.listen(3000);
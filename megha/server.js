var express=require('exress');
var app=express();

var prouctcontroller=function(req,resp)
{
	console.log("Invoking rest api listing of product");
	var customer [
	{id:101,name:"megha",age:23,role:"admin"},
	{id:102,name:"Nilima",age:25,role:"customer"},
	{id:103,name:"Seema",age:24,role:"customer"},
	];
	resp.send(product);
};
	app.get('/customer',prouctcontroller);
	
	var server = app.listen(8088,function()
	{
		var host=server.address().adress
		var port=server.address().port
		console.log("Your server is running at",host,port);
	})
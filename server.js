/**
 * New node file
 */

		var fs = require('fs'),
			http = require('http'),
			socket = require("socket.io");
		var page = fs.readFileSync(__dirname + "/client.html");

var server=http.createServer(function(req,res){
	
	res.write(page);
	res.end();
});

server.listen('4040');

var listener=socket.listen(server,{log:false});

function Boot(socket){
	
	socket.emit("greet","Ramu");

socket.on('sendc',function(cdata){

console.log(cdata);
socket.emit('sends','<div class="alert alert-success" role="alert">'+cdata+'</div>');

socket.broadcast.emit('sends','<div class="alert alert-success" role="alert">'+cdata+'</div>');

});

	
	
}

//console.log(listener);
listener.sockets.on('connection',function(socket){
	Boot(socket);
	
});




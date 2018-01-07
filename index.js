

const app = require('express')();


app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

const server = app.listen(3000);


const io = require('socket.io')(server);

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on('chat message', (msg) => {
		io.emit('chat message', msg);
	});
});




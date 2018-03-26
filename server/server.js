require('./config/config.js');

const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New user connected');

	socket.emit('newEmail', {
		from: 'mike@example.com',
		text: 'Hey. What is going on?',
		createdAt: 123,
	});


	socket.on('createEmail', (newEmail) => {
		console.log('newEmail: ', newEmail);
	});

	socket.on('createMessage', (message) => {
		console.log('message: ', message);
		io.emit('newMessage', {
			from: message.from,
			text: message.text,
			createdAd: new Date().getTime(),
		});
	});

	socket.on('disconnect', () => {
		console.log('User has been disconnected');
	})
});


server.listen(port, () => {
	console.log(`Starting on port ${port}`);
});

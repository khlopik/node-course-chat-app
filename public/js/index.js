let socket = io();

socket.on('connect', () => {
	console.log('Connected to server');
});


socket.on('disconnect', () => {
	console.log('Connection to server lost');
});

socket.on('newEmail', (email) => {
	console.log('New email', email);
});

socket.on('newMessage', (message) => {
	console.log('message: ', message);
});

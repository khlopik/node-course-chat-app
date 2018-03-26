let socket = io();

socket.on('connect', () => {
	console.log('Connected to server');
});

socket.emit('createEmail', {
	to: 'jen@example.com',
	text: 'Hey. This is Oleksii',
});


socket.emit('createMessage', {
	from: 'Oleksii',
	text: 'Hi from web',
	createdAt: 123,
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

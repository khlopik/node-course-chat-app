require('./config/config.js');

const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');

const app = express();
const port = process.env.PORT;

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
// 	res.render('index.html');
// });

app.listen(port, () => {
	console.log(`Starting on port ${port}`);
});

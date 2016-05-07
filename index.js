/*
 *	Module dependencies
 */
import express from 'express';
import http from 'http';
import engine from 'socket.io';
//constant
const port = 5000;
const app = express();
//Configure static routes files
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor esta escuchando en el puerto ${port}`);
});
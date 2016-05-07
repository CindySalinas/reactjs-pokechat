/*
 *	Module dependencies
 */
import express from 'express';
import http from 'http';
import engine from 'socket.io';
import dbapi from './db-api';
//constant
const port = 5000;
const app = express();
//Configure static routes files
app.use('/', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html');
});

app.get('/pokemons', (req, res) => {
	dbapi.pokemons.find((pokemons) => {
		res.json(pokemons);
	})
});

let server = http.createServer(app).listen(port, () => {
	console.log(`El servidor esta escuchando en el puerto ${port}`);
});

const io = engine.listen(server);

io.on('connection', (socket) => {
	socket.on('message', (msg) => {
		io.emit('message', msg);
	})
})
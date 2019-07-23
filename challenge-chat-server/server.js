// Challenge-chat-server
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
	res.send('hey! get endpoint');
});

app.get('/messages', (req, res) => {
	res.send(' return all messages ');
});
app.get('/messages/17', (req, res) => {
	res.send(' get one message by id ');
});

app.post('/messages', (req, res) => {
	res.send('create a new message');
});

app.delete('/messages/17', (req, res) => {
	res.send(' delete a message by id ');
});

app.put('/', (req, res) => {
	res.send(' put endpoint');
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.log('Your app is listening on port ' + listener.address().port);
});

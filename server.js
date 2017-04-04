import express from 'express';

let app = express();

app.use('/bin', express.static('./bin'));
app.use('/stylesheets', express.static('./public/stylesheets'));


app.get('/', (req, res) => {
    res.sendfile('./index.html');
});

app.listen(3000, function () {
	console.log('Hello World listening on port 3000!');
});

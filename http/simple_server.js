const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.url === '/style.css') {
		fs.createReadStream('./style.css').pipe(res);
		return;
	} 
	if (req.url === '/index.html') {
		fs.createReadStream('./index.html').pipe(res);
		return;
	}
	res.end('hello world');
});

server.listen(3000, () => {
	console.log(`server is listen at 3000`);
});
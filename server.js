import express from "express";
import http from 'http';
import https from 'https';
import { ExpressPeerServer } from 'peer';

const port = process.env.PORT || "9000";
const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);

const peerServer = ExpressPeerServer(httpServer, {
	allow_discovery: true,
	debug: true,
	proxied: true,
	path: '/',
	port: 443,
	secure: true,
	//ssl: {}
});

app.use(peerServer);

httpServer.listen(port, () => {
	console.log(`http server is listening on : ${port}`);
});
/*
httpsServer.listen(port, () => {
	console.log(`https server is listening on : ${port}`);
});
*/

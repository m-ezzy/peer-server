import express from "express";
import http from 'http';
import https from 'https';
import { ExpressPeerServer } from 'peer';

const port = process.env.PORT || "8000";
const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(app);

const peerServer = ExpressPeerServer(httpsServer, {
	allow_discovery: true,
	debug: true,
	proxied: true,
	path: '/internet-phone',
	port: 443,
	secure: true
	//ssl: {},
});

app.use(peerServer);

httpsServer.listen(port, () => {
	console.log(`https server is listening on : ${port}`);
});

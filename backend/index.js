import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from 'mongoose';
import { Device } from './models/deviceModel.js';
import { Phone } from './models/iPhoneModel.js';
import devicesRoute from './routes/devicesRoute.js';
import phoneRoute from './routes/phoneRoute.js';
import cors from 'cors';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS Policy, Allow custom origin
app.use(cors());

// app.use(
// 	cors({
// 		origin: 'http://localhost:3000',
// 		methods: ['GET', 'POST', 'PUT', 'DELETE'],
// 		allowheaders: ['Content-Type'],
// 	})
// );


app.get('/', (req, res) => {
	console.log(req);
	return res.status(200).send('Bienvenido a Avril');
});

app.use('/devices', devicesRoute);

// Define a new route for '/telephones'
app.get('/phones', (req, res) => {
	console.log(req);
	return res.status(200).send('Bienvenido a Avril, seccion de Telefonos IP');
});

app.use('/phones', phoneRoute);

mongoose
	.connect(mongoDBURL)
	.then(() => {
		console.log('App connected to DB');
		app.listen(PORT, () => {
			console.log(`App is listening to port: ${PORT}`);
		});
	})
	.catch((error) =>{
		console.log(error);
	});

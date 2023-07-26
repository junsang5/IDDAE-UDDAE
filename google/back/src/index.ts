import express from 'express';
import http from 'http';
import router from './router/index';
import errorHandler from './middlewares/errorHandler';
import dotenv from 'dotenv';
import dataSource from './config/dataSource';
dotenv.config();
const connectDB = async () => {
	try {
		await dataSource.initialize();
		console.log('DB connected!');
	} catch (err) {
		console.error(err);
	}
};
const loadExpressApp = () => {
	//await connectDB();

	const app = express();
	app.use(express.json());
	app.use(router);
	app.use(errorHandler);
	app.all('*', (_, res) => {
		res.status(404).json({
			data: null,
			error: {
				message: 'URL Not Found',
			},
		});
	});


	return app;
};

const startServer = async () => {
	const app = await loadExpressApp();

	const server = http.createServer(app);

	const port = process.env.PORT || 3000;

	server.listen(port, () => {
		console.log(`Server is listening on port ${port}`);
	});
};

startServer()
	.then(() => {
		console.log('Server started!');
	})
	.catch((err) => {
		console.error(err);
	});




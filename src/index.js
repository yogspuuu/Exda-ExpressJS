import express from 'express';
import FetchCore from './utils/FetchCore.js';

const serve = express();
const port = 3000;

// Root route,
serve.get('/', (req, res) => {
	res.send('API Gateway.');
});

// Stock/Crypto endpoint,
serve.set('json spaces', 4);
serve.get('/data/:code', async (req, res) => {
	const data = await FetchCore(req.params.code);
	
	res.json(data[0]);
});

// Output terminal.
serve.listen(port, () => {
  	console.log(`Exda app listening at http://0.0.0.0:${port}`);
});

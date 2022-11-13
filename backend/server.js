import express from 'express';
import data from './data.js';
import cors from 'cors';

const app = express();
// const cors = require('cors');


app.get('/', (req,res) => {
    res.send('Server is ready');
});


app.use(cors());
// app.use(cors({ origin: true, credentials: true }));

app.get('/api/products', (req,res) => {
    console.log("first", data)
    res.send(data.products);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server at http://localhost:${port}`)
})
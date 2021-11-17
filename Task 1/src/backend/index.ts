import express from 'express';
import path from 'path';

const app = express();

const items: any = {}
for(let i = 1; i < 11; i++)
    items[i] = `Item ${i}`;


app.get('/items', (req, res, next) => {
    JSON.stringify(res.send(items));
});

app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

app.listen(3000);
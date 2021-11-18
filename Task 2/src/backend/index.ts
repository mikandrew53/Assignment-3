import express from 'express';
import path from 'path';
import { CashRegister } from './CashRegister';

const cashRegister = new CashRegister();
const app = express();

app.get('/items/:UPCCode?', (req, res, next) => cashRegister.getCurrentProductInfo(req, res));

app.use('/', express.static(path.join(__dirname, '..', 'frontend')));

app.listen(3000);
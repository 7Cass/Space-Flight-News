import 'reflect-metadata';
import express from 'express';
import './database';
import './containers';
import routes from './routes';
import { pagination } from 'typeorm-pagination';

const app = express();
app.use(express.json());

app.use(pagination);

app.use(routes);

app.listen(3333, () => {
    console.log('Listening on port 3333');
});
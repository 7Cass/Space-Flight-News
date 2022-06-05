import { Request, Response, Router } from 'express';
import articlesRouter from './articles.routes';

const routes = Router();

routes.get('/', (_, response: Response) => response.status(200).send('Fullstack Challenge 2021 🏅 - Space Flight News'));


routes.use('/articles', articlesRouter);

export default routes;

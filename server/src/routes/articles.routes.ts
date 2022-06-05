import { Router } from 'express';
import ArticlesController from '../modules/articles/controllers/ArticlesController';

const articlesRouter = Router();
const articlesController = new ArticlesController();

articlesRouter.post('/', articlesController.create);
articlesRouter.get('/', articlesController.findAll);
articlesRouter.get('/:id', articlesController.findOne);

export default articlesRouter;
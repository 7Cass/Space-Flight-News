import { container } from 'tsyringe';

// Articles
import ArticlesRepository from '../modules/articles/repositories/ArticlesRepository';
import { IArticlesRepository } from '../modules/articles/@types/Article';

container.registerSingleton<IArticlesRepository>(
    'ArticlesRepository',
    ArticlesRepository
);
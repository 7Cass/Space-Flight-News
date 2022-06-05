import { inject, injectable } from 'tsyringe';
import { IArticlesRepository, IRequest } from '../@types/Article';
import Article from '../entities/Article';

@injectable()
export class CreateArticleService {
    constructor(
        @inject('ArticlesRepository')
        private articlesRepository: IArticlesRepository,
    ) { }

    async execute(createArticleDto: IRequest): Promise<Article> {
        const article = await this.articlesRepository.create(createArticleDto);

        return article;
    }
}
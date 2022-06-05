import { inject, injectable } from 'tsyringe';
import { IArticlesRepository } from '../@types/Article';
import Article from '../entities/Article';

@injectable()
export class FindOneArticle {
    constructor(
        @inject('ArticlesRepository')
        private articlesRepository: IArticlesRepository,
    ) { }

    async execute(id: number): Promise<Article> {
        const article = await this.articlesRepository.findById(id);

        return article;
    }
}
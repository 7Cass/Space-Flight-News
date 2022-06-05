import { inject, injectable } from 'tsyringe';
import { PaginationAwareObject } from 'typeorm-pagination/dist/helpers/pagination';
import { ArticlesPaginate, IArticlesRepository } from '../@types/Article';

@injectable()
export class FindAllArticlesService {
    constructor(
        @inject('ArticlesRepository')
        private articlesRepository: IArticlesRepository,
    ) { }

    async execute(per_page: number = 5): Promise<ArticlesPaginate> {
        const articles = await this.articlesRepository.findAll(per_page);

        return articles;
    }
}
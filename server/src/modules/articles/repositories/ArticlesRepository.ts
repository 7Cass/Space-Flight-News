import { getRepository, Repository } from "typeorm";
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import { IArticlesRepository, ICreateArticleDTO } from "../@types/Article";
import Article from "../entities/Article";

class ArticlesRepository implements IArticlesRepository {
    private ormRepository: Repository<Article>;

    constructor() {
        this.ormRepository = getRepository(Article);
    }

    public async create(data: ICreateArticleDTO): Promise<Article> {
        const article = this.ormRepository.create({
            ...data
        });

        await this.ormRepository.save(article);

        return article;
    }

    public async findAll(per_page: number): Promise<PaginationAwareObject> {
        const articles = await this.ormRepository.createQueryBuilder('a')
            .orderBy('a.publishedAt', 'DESC')
            .paginate(per_page);

        return articles;
    }

    public async findById(id: number): Promise<Article> {
        const article = this.ormRepository.findOne(id);

        return article;
    }
}

export default ArticlesRepository;
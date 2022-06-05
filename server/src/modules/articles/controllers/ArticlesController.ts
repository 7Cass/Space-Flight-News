import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateArticleService } from "../services/CreateArticleService";
import { FindAllArticlesService } from "../services/FindAllArticlesService";
import { FindOneArticle } from "../services/FindOneArticleService";

export default class ArticlesController {
    public async create(request: Request, response: Response): Promise<Response> {
        const data = request.body;

        const createArticle = container.resolve(CreateArticleService);

        const article = await createArticle.execute(data);

        return response.status(200).json(article);
    }

    public async findAll(request: Request, response: Response): Promise<Response> {
        const findAllArticles = container.resolve(FindAllArticlesService);

        const per_page = +request.query?.per_page;

        const articles = await findAllArticles.execute(per_page);

        return response.status(200).json(articles);
    }

    public async findOne(request: Request, response: Response): Promise<Response> {
        const findOneArticle = container.resolve(FindOneArticle);

        const id = request.params?.id;

        const articles = await findOneArticle.execute(+id);

        return response.status(200).json(articles);
    }
}
import { PaginationAwareObject } from "typeorm-pagination/dist/helpers/pagination";
import Article from "../entities/Article";

export type ICreateArticleDTO = {
    title: string;
    url?: string;
    imageUrl?: string;
    newsSite?: string;
    summary?: string;
    publishedAt?: Date;
    featured?: boolean;
};

export type IRequest = {
    title: string;
    url?: string;
    imageUrl?: string;
    newsSite?: string;
    summary?: string;
    publishedAt?: Date;
    featured?: boolean;
};

export interface ArticlesPaginate extends PaginationAwareObject {
    data: Article[];
}

export interface IArticlesRepository {
    create(data: ICreateArticleDTO): Promise<Article>;
    findAll(per_page: number): Promise<ArticlesPaginate>;
    findById(id: number): Promise<Article>;
}
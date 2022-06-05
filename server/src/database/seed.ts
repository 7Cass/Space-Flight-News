import axios from 'axios';
import { createConnection } from 'typeorm';
import Article from '../modules/articles/entities/Article';

const api = axios.create({
    baseURL: 'https://api.spaceflightnewsapi.net/v3/',
});


async function seedDb() {
    const connection = await createConnection();

    const response = await api.get('articles?_limit=10');
    const articles: Article[] = response.data;

    for await (const article of articles) {
        await connection.query(
            `INSERT INTO ARTICLES
                (title, url, "imageUrl", "newsSite", summary, "publishedAt", featured)
            VALUES
                ('${article.title}', '${article.url}', '${article.imageUrl}', '${article.newsSite}', '${article.summary}', '${article.publishedAt}', '${article.featured}')`
        );
    }

    await connection.close();

    return {
        data: "Seed finished succesfully..."
    }
}

seedDb().then((res) => console.log(res.data)).catch(e => console.log(e));
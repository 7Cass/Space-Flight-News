import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('articles')
class Article {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    featured: boolean;

    @Column()
    title: string;

    @Column()
    url: string;

    @Column()
    imageUrl: string;

    @Column()
    newsSite: string;

    @Column()
    summary: string;

    @Column()
    publishedAt: Date;
}

export default Article;
import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class createArticlesTable1654360236121 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "articles",
                columns: [
                    { name: "id", type: "integer", isPrimary: true, isGenerated: true, generationStrategy: "increment" },
                    { name: "featured", type: "boolean", default: false, isNullable: false },
                    { name: "title", type: "varchar", isNullable: false },
                    { name: "url", type: "varchar", isNullable: true },
                    { name: "imageUrl", type: "varchar", isNullable: true },
                    { name: "newsSite", type: "varchar", isNullable: true },
                    { name: "summary", type: "text", isNullable: true },
                    { name: "publishedAt", type: "timestamp", isNullable: true },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('articles');
    }

}

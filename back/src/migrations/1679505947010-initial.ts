import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1679505947010 implements MigrationInterface {
    name = 'initial1679505947010'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar)`);
        await queryRunner.query(`CREATE TABLE "users" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "password" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')))`);
        await queryRunner.query(`CREATE TABLE "temporary_contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar, CONSTRAINT "FK_30ef77942fc8c05fcb829dcc61d" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_contacts"("id", "name", "email", "phone", "createdAt", "userId") SELECT "id", "name", "email", "phone", "createdAt", "userId" FROM "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`ALTER TABLE "temporary_contacts" RENAME TO "contacts"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME TO "temporary_contacts"`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "email" varchar NOT NULL, "phone" varchar NOT NULL, "createdAt" datetime NOT NULL DEFAULT (datetime('now')), "userId" varchar)`);
        await queryRunner.query(`INSERT INTO "contacts"("id", "name", "email", "phone", "createdAt", "userId") SELECT "id", "name", "email", "phone", "createdAt", "userId" FROM "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "temporary_contacts"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
    }

}

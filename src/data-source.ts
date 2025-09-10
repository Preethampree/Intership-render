import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "123456789",   // must match what you set in step 1
  database: "schedula_db",         // make sure this DB exists
  synchronize: false,
  logging: true,
  entities: ["src/entities/**/*.ts"],
migrations: ["dist/migrations/*.js"],
});

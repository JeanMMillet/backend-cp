import { DataSource } from "typeorm";

export default new DataSource({
  type: "sqlite",
  database: "checkpointDB.sqlite",
  entities: ["src/entities/*.ts"],
  synchronize: true,
  logging: true,
});

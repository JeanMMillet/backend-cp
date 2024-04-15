import db from "./db";
import { Country } from "./entities/country.entity";
import { countries } from "./fixtures/fakeData";

async function main() {
  await db.initialize();
  await db.getRepository(Country).clear();
  db.query("delete from sqlite_sequence where name='country';");
  await db.getRepository(Country).save(countries);

  console.log("Database initialized ! 🚀🚀");
}

main();

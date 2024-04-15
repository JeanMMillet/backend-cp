import db from "./db";
import { Country } from "./entities/country.entity";
import { countries } from "./fixtures/fakeData";

async function main() {
  await db.initialize();
  const countryTable = db.getRepository(Country);
  await countryTable.clear();
  db.query("delete from sqlite_sequence where name='country';");
  await countryTable.save(countries);

  console.log("Database initialized ! 🚀🚀");
}

main();

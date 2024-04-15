import db from "./db";
import CountryService from "./services/country.service";

async function clearDB() {
  const runner = db.createQueryRunner();
  await runner.query("PRAGMA foreign_keys=OFF");
  await Promise.all(
    db.entityMetadatas.map(async (entity) =>
      runner.query(`DROP TABLE IF EXISTS ${entity.tableName}`)
    )
  );
  await runner.query("PRAGMA foreign_keys=ON");
  await db.synchronize();
}

async function main() {
  await db.initialize();
  await clearDB();

  const country1 = await new CountryService().create({
    name: "France",
    code: "FR",
    emoji: "🇫🇷",
    continent: "EUR",
  });
  const country2 = await new CountryService().create({
    name: "Italie",
    code: "IT",
    emoji: "🇮🇹",
    continent: "EUR",
  });
  const country3 = await new CountryService().create({
    name: "Japon",
    code: "JP",
    emoji: "🇯🇵",
    continent: "ASI",
  });
}

main();

import { Repository } from "typeorm";
import {
  Continent,
  Country,
  CreateCountryInput,
} from "../entities/country.entity";
import datasource from "../db";

export default class CountryService {
  db: Repository<Country>;
  constructor() {
    this.db = datasource.getRepository(Country);
  }

  async list() {
    return await this.db.find();
  }

  async create(infos: CreateCountryInput) {
    const alreadyExist = await this.db.findOne({ where: { name: infos.name } });
    if (alreadyExist)
      throw new Error("This country alreasy exists in the database");

    const newCountry = this.db.create(infos);
    return await this.db.save(newCountry);
  }

  async listByContinent(continent: Continent) {
    return await this.db.find({
      where: {
        continent,
      },
    });
  }

  async findByCode(code: string) {
    const country = await this.db.findOne({ where: { code } });
    return country;
  }
}

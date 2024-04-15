import { Repository } from "typeorm";
import { Country, CreateCountryInput } from "../entities/country.entity";
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
    const newCountry = this.db.create(infos);
    return await this.db.save(newCountry);
  }

  async listByContinent(continent: string) {
    return await this.db.find({
      where: {
        continent,
      },
    });
  }

  async findByCode(code: string) {
    console.log("code", code);
    const country = await this.db.findOne({ where: { code } });
    console.log('country', country)
    return country;
  }
}

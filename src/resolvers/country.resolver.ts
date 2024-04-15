import { Arg, Mutation, Query, Resolver } from "type-graphql";
import {
  Continent,
  Country,
  CreateCountryInput,
} from "../entities/country.entity";
import CountryService from "../services/country.service";

@Resolver()
export class CountryResolver {
  @Query(() => [Country])
  async listCountries() {
    return await new CountryService().list();
  }
  @Query(() => [Country])
  async listByContinent(@Arg("continent") continent: Continent) {
    return await new CountryService().listByContinent(continent);
  }

  @Query(() => Country)
  async findByCode(@Arg("code") code: string) {
    const country = await new CountryService().findByCode(code);
    return country;
  }

  @Mutation(() => Country)
  async createCountry(@Arg("infos") infos: CreateCountryInput) {
    return await new CountryService().create(infos);
  }
}

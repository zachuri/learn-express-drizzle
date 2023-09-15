import db from '../config/db.config';
import { Country, countries } from '../models/world.model';

export const CountiresService = {
  async getAll() {
    const allCountries = await db.select().from(countries);

    return allCountries;
  },
  async getWithCities() {
    const countries = await db.query.countries.findMany({
      with: {
        cities: true
      }
    });

    return countries;
  },
  async insertCountry(newCountries: Country[]): Promise<Country[]> {
    const insertedCountries = await db
      .insert(countries)
      .values(newCountries)
      .returning();

    return insertedCountries;
  }
};

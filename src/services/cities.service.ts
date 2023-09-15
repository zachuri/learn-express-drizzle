import db from '../config/db.config';
import { City, cities } from '../models/schema.model';

export const CitiesService = {
  async getAll() {
    const allCities = await db.select().from(cities);

    return allCities;
  },
  async getWithCountries() {
    const countries = await db.query.countries.findMany({
      with: {
        cities: true
      }
    });

    return countries;
  },
  async insertCity(newCities: City[]): Promise<City[]> {
    const insertedCities = await db
      .insert(cities)
      .values(newCities)
      .returning();

    return insertedCities;
  }
};

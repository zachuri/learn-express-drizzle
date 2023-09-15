import { Request, Response } from 'express';
import { CitiesService } from '../services/cities.service';

export const CitiesController = {
  async getAll(req: Request, res: Response) {
    try {
      const allCities = await CitiesService.getAll();
      if (!allCities) {
        throw new Error('No cities found'); // Add your custom error message
      }
      res.json(allCities);
    } catch (err: any) {
      // Specify the type as 'any' for now
      console.error(`Error while getting countries`, err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getAllWithCountries(req: Request, res: Response) {
    try {
      const allCountriesWithCities = await CitiesService.getWithCountries();
      if (!allCountriesWithCities) {
        throw new Error('No countries with ciites found'); // Add your custom error message
      }
      res.json(allCountriesWithCities);
    } catch (err: any) {
      // Specify the type as 'any' for now
      console.error(`Error while getting countries with ciites`, err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async create(req: Request, res: Response) {
    try {
      const cities = await CitiesService.insertCity([
        { id: 1, name: 'Berlin', countryId: 1, popularity: 'popular' },
        { id: 2, name: 'Jersey', countryId: 2, popularity: 'unknown' },
        { id: 3, name: 'London', countryId: 3, popularity: 'known' },
        { id: 4, name: 'Luton', countryId: 3, popularity: 'known' },
        { id: 5, name: 'Hamburg', countryId: 1, popularity: 'known' }
      ]);

      if (!cities) {
        throw new Error('Failed to insert cities'); // Add your custom error message
      }

      res.json(cities);
    } catch (err: any) {
      console.error(`Error while inserting cities`, err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

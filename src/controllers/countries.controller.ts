import { Request, Response } from 'express';
import { CountiresService } from '../services/countries.service';

export const CountiresController = {
  async getAllCountries(req: Request, res: Response) {
    try {
      const allCountries = await CountiresService.getAll();
      if (!allCountries) {
        throw new Error('No countries found'); // Add your custom error message
      }
      res.json(allCountries);
    } catch (err: any) {
      // Specify the type as 'any' for now
      console.error(`Error while getting countries`, err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  async getAllCountriesWithCities(req: Request, res: Response) {
    try {
      const allCountriesWithCities = await CountiresService.getWithCities();
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
      const countries = await CountiresService.insertCountry([
        { id: 1, name: 'Germany' },
        { id: 2, name: 'USA' },
        { id: 3, name: 'UK' }
      ]);

      if (!countries) {
        throw new Error('Failed to insert countries'); // Add your custom error message
      }

      res.json(countries);
    } catch (err: any) {
      console.error(`Error while inserting countries`, err.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
};

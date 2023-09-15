// import express from 'express';
// import {
//   getAllCities,
//   insertCountry,
//   insertCity,
//   getAllCountries,
//   getAllCountriesWithCities,
//   getAllCitiesWithCountry
// } from './services/queries';

// app.get('/cities', (req, res) => {
//   getAllCities().then(allCities => {
//     res.json(allCities);
//   });
// });


// app.get('/citiesWithCountry', (req, res) => {
//   getAllCitiesWithCountry().then(allCitiesWithCountry => {
//     res.json(allCitiesWithCountry);
//   });
// });


// // Please use POST for inserting data ;)
// app.get('/insertCities', async (req, res) => {
//   const cities = await insertCity([
//     { id: 1, name: 'Berlin', countryId: 1, popularity: 'popular' },
//     { id: 2, name: 'Jersey', countryId: 2, popularity: 'unknown' },
//     { id: 3, name: 'London', countryId: 3, popularity: 'known' },
//     { id: 4, name: 'Luton', countryId: 3, popularity: 'known' },
//     { id: 5, name: 'Hamburg', countryId: 1, popularity: 'known' }
//   ]);

//   res.send(cities);
// });

import express, { Request, Response, NextFunction } from 'express';
import countriesRoute from './routes/countries.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Register user routes
app.use('/countries', countriesRoute);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

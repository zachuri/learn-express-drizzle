import express from 'express';

import { CountiresController } from '../controllers/countries.controller';

const router = express.Router();

/* GET all countries */
router.get('/', CountiresController.getAllCountries);

/* GET all countries with ciites */
router.get('/withCities', CountiresController.getAllCountriesWithCities);

/* POST all countries with ciites */
router.post('/', CountiresController.create);

export default router;

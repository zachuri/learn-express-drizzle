import express from 'express';

import { CitiesController } from '../controllers/cities.controller';

const router = express.Router();

/* GET all countries */
router.get('/', CitiesController.getAll);

/* GET all countries with ciites */
router.get('/withCountries', CitiesController.getAllWithCountries);

/* POST all countries with ciites */
router.post('/', CitiesController.create);

export default router;

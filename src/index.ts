import express, { Request, Response, NextFunction } from 'express';
import countriesRoute from './routes/countries.route';
import citiesRoute from './routes/cities.route';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Register user routes
app.use('/countries', countriesRoute);
app.use('/cities', citiesRoute);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

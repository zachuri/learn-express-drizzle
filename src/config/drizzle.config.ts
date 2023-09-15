import 'dotenv/config';
import type { Config } from 'drizzle-kit';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is missing');
}

export default {
  schema: './src/models/schema.model.ts',
  out: './drizzle',
  connectionString: process.env.DATABASE_URL
} satisfies Config;

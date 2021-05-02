import logger from './logger';
import dotenv from 'dotenv';
import fs from 'fs';

if (fs.existsSync('.env')) {
	logger.debug('Using .env file to supply config environment variables');
	dotenv.config({ path: '.env' });
	console.log('using env');
} else {
	logger.debug('Using .env.example file to supply config environment variables');
	dotenv.config({ path: '.env.example' });
	console.log('using example env');
}

console.log(process.env);

export const ENVIRONMENT = process.env.NODE_ENV;
export const IS_DEV = ENVIRONMENT !== 'production';
export const DB_CONNECTION_STRING = process.env.DB_URI;
export const API_VERSION = process.env.API_VERSION;
export const PORT = process.env.PORT || 3000;

if (!DB_CONNECTION_STRING) {
	logger.error('No mongo connection string. Set DB_URI environment variable.');
	process.exit(1);
}

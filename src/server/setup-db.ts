import './setup-di';
import { createConnection } from 'typeorm';
import { DB_CONNECTION_STRING } from '@util/config';
import logger from '@util/logger';
import { RecordDao } from '@dao/RecordDao';

export const connectDb = () => {
	createConnection({
		type: 'mongodb',
		url: DB_CONNECTION_STRING,
		entities: [RecordDao],
		useUnifiedTopology: true,
	}).catch((error) => {
		console.log(error);
		logger.error(`Couldn't connect to the database. Connection string: ${DB_CONNECTION_STRING}`);
		process.exit(1);
	});
};

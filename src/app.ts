import express, { ErrorRequestHandler, RequestHandler } from 'express';
import compression from 'compression';
import errorHandler from 'errorhandler';
import lusca from 'lusca';
import { useExpressServer } from 'routing-controllers';
import { createConnection } from 'typeorm';
import { SearchController } from '@controller/SearchController';
import { API_VERSION, DB_CONNECTION_STRING, IS_DEV, PORT } from '@util/config';
import { RecordDao } from '@dao/RecordDao';
import logger from '@util/logger';

createConnection({
	type: 'mongodb',
	url: DB_CONNECTION_STRING,
	entities: [RecordDao],
}).catch((error) => {
	console.log(error);
	logger.error(`Couldn't connect to the database. Connection string: ${DB_CONNECTION_STRING}`);
	process.exit(1);
});

const middlewares: (RequestHandler | ErrorRequestHandler)[] = [
	compression(),
	express.json(),
	express.urlencoded({ extended: true }),
	lusca.xframe('SAMEORIGIN'),
	lusca.xssProtection(true),
	IS_DEV ? errorHandler() : undefined,
].filter(Boolean);

export const app = useExpressServer(express().set('port', PORT).use(middlewares), {
	routePrefix: ['/api', API_VERSION].join('/'),
	controllers: [SearchController],
	development: false,
});

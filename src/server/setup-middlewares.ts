import express, { ErrorRequestHandler, RequestHandler } from 'express';
import * as core from 'express-serve-static-core';
import compression from 'compression';
import errorHandler from 'errorhandler';
import lusca from 'lusca';
import { IS_DEV } from '@util/config';

export const getDefaultMiddlewares: () => (RequestHandler | ErrorRequestHandler)[] = () => {
	return [
		compression(),
		express.json(),
		express.urlencoded({ extended: true }),
		lusca.xframe('SAMEORIGIN'),
		lusca.xssProtection(true),
		IS_DEV ? errorHandler() : undefined,
	].filter(Boolean);
};

export const setupMiddlewares = (app: core.Express): core.Express => {
	return app.use(getDefaultMiddlewares());
};

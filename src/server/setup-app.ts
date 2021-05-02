import express from 'express';
import { useExpressServer } from 'routing-controllers';
import { PORT } from '@util/config';
import { pipe } from '@util/pipe';
import { connectDb } from './setup-db';
import { setupMiddlewares } from './setup-middlewares';
import { setupSwagger } from './setup-swagger';
import { RouteControllersConfig } from './RouteControllersConfig';

let app: express.Application;

export const serverInstance = () => {
	if (!app) {
		connectDb();
		app = useExpressServer(
			pipe(express())
				.add((app) => app.set('port', PORT))
				.add(setupMiddlewares)
				.add(setupSwagger)
				.run(),
			RouteControllersConfig
		);
	}

	return app;
};

import * as core from 'express-serve-static-core';
import * as swaggerUi from 'swagger-ui-express';
import { API_VERSION } from '@util/config';
import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { defaultMetadataStorage } from 'class-transformer/storage';
import { RouteControllersConfig } from './RouteControllersConfig';

const swaggerDoc = routingControllersToSpec(getMetadataArgsStorage(), RouteControllersConfig, {
	info: {
		title: 'BE Assesment APIs',
		version: API_VERSION,
		description: 'This page contains API endpoints for BE Assesment',
		contact: {
			name: 'Yigit Yuce',
			email: 'ygtyce@gmail.com',
		},
	},
	components: {
		schemas: validationMetadatasToSchemas({
			refPointerPrefix: '#/components/schemas/',
			classTransformerMetadataStorage: defaultMetadataStorage,
		}),
	},
});

export const setupSwagger = (app: core.Express): core.Express => {
	return app.use(
		'/api-docs',
		swaggerUi.serve,
		swaggerUi.setup(swaggerDoc, { customSiteTitle: 'Swagger UI for BE Assesment', explorer: true })
	);
};

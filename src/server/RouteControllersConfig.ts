import { RoutingControllersOptions } from 'routing-controllers';
import { API_VERSION } from '@util/config';
import { SearchController } from '@controller/SearchController';

export const RouteControllersConfig: RoutingControllersOptions = {
	routePrefix: ['/api', API_VERSION].join('/'),
	controllers: [SearchController],
	development: false,
};

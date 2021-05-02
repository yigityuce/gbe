import * as setupDb from '../src/server/setup-db';
import * as typeorm from 'typeorm';
import Container from 'typedi';
import { SearchService } from '../src/service/SearchService';
import { RecordDto } from '../src/dto/RecordDto';

export const mockSearch = () => {
	jest.spyOn(setupDb, 'connectDb').mockImplementation(() => undefined);

	Container.set(typeorm.ConnectionManager, {
		has: (connectionName: string) => true,
		get: (connectionName: string) => ({
			getRepository: (entityType: any) => {},
			getMongoRepository: (entityType: any) => {},
			getTreeRepository: (entityType: any) => {},
			getCustomRepository: (repositoryType: any) => {},
		}),
	});

	jest.spyOn(SearchService.prototype, 'getAllRecords').mockImplementation(
		(): Promise<RecordDto[]> => {
			return Promise.resolve([
				{ key: 'key1', createdAt: new Date(), totalCount: 1 },
				{ key: 'key2', createdAt: new Date(), totalCount: 2 },
			]);
		}
	);
	jest.spyOn(SearchService.prototype, 'getFilteredRecords').mockImplementation(
		(): Promise<RecordDto[]> => {
			return Promise.resolve([
				{ key: 'key1', createdAt: new Date(), totalCount: 1 },
				{ key: 'key2', createdAt: new Date(), totalCount: 2 },
			]);
		}
	);
};

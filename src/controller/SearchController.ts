import { Body, Get, Post, ContentType, JsonController } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { FilterDto } from '@dto/FilterDto';
import { SearchService } from '@service/SearchService';
import { SearchResultDto } from '@dto/SearchResultDto';
import { OpenAPI, ResponseSchema } from 'routing-controllers-openapi';
import { RecordDto } from '@dto/RecordDto';

@Service()
@JsonController('/search')
export class SearchController {
	@Inject()
	private readonly searchService: SearchService;

	@Get()
	@ContentType('application/json')
	@ResponseSchema(RecordDto, { isArray: true })
	async getAll() {
		return await this.searchService.getAllRecords();
	}

	@Post()
	@ContentType('application/json')
	@ResponseSchema(SearchResultDto)
	@OpenAPI({ description: 'Search records endpoint' })
	async search(@Body() search: FilterDto) {
		try {
			return new SearchResultDto(0, 'Success', await this.searchService.getFilteredRecords(search));
		} catch (e: any) {
			return new SearchResultDto();
		}
	}
}

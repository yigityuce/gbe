import { Controller, Body, Get, Post, ContentType } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { SearchDto } from '@dto/SearchDto';
import { SearchService } from '@service/SearchService';

@Service()
@Controller('/search')
export class SearchController {
	@Inject()
	private readonly searchService: SearchService;

	@Get()
	async test() {
		const records = await this.searchService.getAllRecords();
		console.log(records);
		return 'This action returns all records';
	}

	@Post()
	@ContentType('application/json')
	search(@Body() search: SearchDto) {
		console.log('search requested:', search);
		return 'Search requested...';
	}
}

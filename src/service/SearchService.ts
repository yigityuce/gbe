import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { RecordRepository } from '@repository/RecordRepository';
import { FilterDto } from '@dto/FilterDto';

@Service()
export class SearchService {
	@InjectRepository()
	private readonly recordRepository: RecordRepository;

	getAllRecords() {
		return this.recordRepository.getAllRecords();
	}

	async getFilteredRecords({ startDate, endDate, minCount, maxCount }: FilterDto) {
		return await this.recordRepository.getFilteredRecords(new Date(startDate), new Date(endDate), minCount, maxCount);
	}
}

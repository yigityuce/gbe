import { Service } from 'typedi';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { RecordRepository } from '@repository/RecordRepository';

@Service()
export class SearchService {
	@InjectRepository()
	private readonly recordRepository: RecordRepository;

	getAllRecords() {
		return this.recordRepository.getAllRecords();
	}
}

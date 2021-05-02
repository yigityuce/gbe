import { RecordDao } from '@dao/RecordDao';
import { Service } from 'typedi';
import { EntityRepository, Repository } from 'typeorm';

@Service()
@EntityRepository(RecordDao)
export class RecordRepository extends Repository<RecordDao> {
	public getAllRecords() {
		return this.find();
	}
}

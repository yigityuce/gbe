import { Service } from 'typedi';
import { EntityRepository, MongoRepository } from 'typeorm';
import { RecordDao } from '@dao/RecordDao';
import { RecordDto } from '@dto/RecordDto';

@Service()
@EntityRepository(RecordDao)
export class RecordRepository extends MongoRepository<RecordDao> {
	public getAllRecords() {
		return this.aggregate<RecordDto>([
			{
				$project: { totalCount: { $sum: '$counts' }, createdAt: true, key: true, _id: false },
			},
		]).toArray();
	}

	getFilteredRecords(dateFrom: Date, dateTo: Date, min: number, max: number) {
		return this.aggregate<RecordDto>([
			{
				$match: {
					createdAt: {
						$gte: dateFrom,
						$lte: dateTo,
					},
				},
			},
			{
				$project: { totalCount: { $sum: '$counts' }, createdAt: true, key: true, _id: false },
			},
			{
				$match: {
					totalCount: {
						$gte: min,
						$lte: max,
					},
				},
			},
		]).toArray();
	}
}

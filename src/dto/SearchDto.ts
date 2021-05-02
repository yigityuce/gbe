import { IsInt, IsISO8601 } from 'class-validator';

export class SearchDto {
	@IsISO8601({ strict: true })
	startDate: Date;

	@IsISO8601({ strict: true })
	endDate: Date;

	@IsInt()
	minCount: number;

	@IsInt()
	maxCount: number;
}

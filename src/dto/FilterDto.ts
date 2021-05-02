import { IsInt, IsISO8601 } from 'class-validator';
import { JSONSchema } from 'class-validator-jsonschema';

@JSONSchema({
	description: 'Used for filtering records when searching',
	example: {
		startDate: '2017-01-01',
		endDate: '2021-06-21',
		minCount: 100,
		maxCount: 500,
	},
})
export class FilterDto {
	@IsISO8601({ strict: true })
	startDate: Date;

	@IsISO8601({ strict: true })
	endDate: Date;

	@IsInt()
	minCount: number;

	@IsInt()
	maxCount: number;
}

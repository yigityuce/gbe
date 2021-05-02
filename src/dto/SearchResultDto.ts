import { RecordDto } from './RecordDto';
import httpStatus from 'http-status';
import { IsNumber, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class SearchResultDto {
	@IsNumber()
	public code: number;

	@IsString()
	public msg: string;

	@ValidateNested({ each: true })
	@Type(() => RecordDto)
	public records: RecordDto[];

	constructor(
		code = httpStatus.INTERNAL_SERVER_ERROR,
		msg = httpStatus[httpStatus.INTERNAL_SERVER_ERROR] as string,
		records: RecordDto[] = []
	) {
		this.code = code;
		this.msg = msg;
		this.records = records;
	}
}

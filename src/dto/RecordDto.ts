import { IsDate, IsNumber, IsString } from 'class-validator';

export class RecordDto {
	@IsString()
	key: string;

	@IsDate()
	createdAt: Date;

	@IsNumber()
	totalCount: number;
}

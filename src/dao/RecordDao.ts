import { Column, Entity, ObjectID, ObjectIdColumn } from 'typeorm';

@Entity({ name: 'records' })
export class RecordDao {
	@ObjectIdColumn()
	id: ObjectID;

	@Column()
	key: string;

	@Column()
	createdAt: Date;

	@Column()
	counts: number[];

	@Column()
	value: string;
}

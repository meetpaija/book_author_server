import { Table, Column, Model, HasMany, PrimaryKey, DataType } from 'sequelize-typescript';
import { Book } from './book.model';

@Table({
    timestamps: false,
    tableName: "author",
    modelName: "Author"
})
export class Author extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;

  @Column({
    type: DataType.STRING
  })
  declare name: string;

  @Column({
    type: DataType.TEXT
  })
  declare biography: string;

  @Column({
    type: DataType.DATE
  })
  declare bornDate: Date;

  @HasMany(() => Book)
  books!: Book[];
}
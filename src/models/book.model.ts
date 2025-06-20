import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Author } from './author.model';

@Table({
    timestamps: false,
    tableName: "book",
    modelName: "Book"
})
export class Book extends Model {
  @Column({
    primaryKey: true,
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4
  })
  declare id: string;

  @Column({
    type: DataType.STRING
  })
  declare title: string;

  @Column({
    type: DataType.TEXT
  })
  declare description: string;

  @Column({
    type: DataType.DATE
  })
  declare published_date: Date;

  @ForeignKey(() => Author)
  @Column({
    type: DataType.UUID
  })
  declare author_id: string;

  @BelongsTo(() => Author)
  author!: Author

}
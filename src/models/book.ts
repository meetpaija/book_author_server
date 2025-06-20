import { Table, Column, Model, DataType, ForeignKey } from 'sequelize-typescript';
import Author from './author';

@Table({
    timestamps: true,
    tableName: "books",
    modelName: "Book"
})
class Book extends Model {
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
}

export default Book;

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from "../config/sequelize";
// import { title } from "process";

// // basic attributes
// interface BookAttributes {
//     id: string;
//     title: string;
//     numberOfPages: number;
//     authorId: string;
// }

// // creational attributes
// interface BookCreationAttributes extends Optional<BookAttributes, 'id'> {}

// // common Book instance with default columns
// interface BookInstance
//     extends Model<BookAttributes, BookCreationAttributes>,
//         BookAttributes {
//             createdAt?: Date;
//             updatedAt?: Date;
//         }

// const Book = sequelize.define<BookInstance>(
//     'Book',
//     {
//         id: {
//             allowNull: false,
//             autoIncrement: true,
//             primaryKey: true,
//             type: DataTypes.UUID,
//             unique: true,
//         },
//         title: {
//             allowNull: true,
//             type: DataTypes.TEXT,
//         },
//         numberOfPages: {
//             allowNull: false,
//             type: DataTypes.INTEGER,
//         },
//         authorId: {
//             allowNull: true,
//             type: DataTypes.UUID,
//         },
//     },
//     {}
// );


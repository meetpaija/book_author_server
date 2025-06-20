import { Table, Column, Model, HasMany, PrimaryKey, DataType } from 'sequelize-typescript';

@Table({
    timestamps: true,
    tableName: "authors",
    modelName: "Author"
})
class Author extends Model {
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
}

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from "../config/sequelize";
// import Book from "./book";

// // basic attributes
// interface AuthorAttributes {
//     id: string;
//     firstName: string;
//     lastName: string;
//     email: string;
// }

// // creational attributes
// interface AuthorCreationAttributes extends Optional<AuthorAttributes, 'id'> {}

// // common author instance with default columns
// interface AuthorInstance
//     extends Model<AuthorAttributes, AuthorCreationAttributes>,
//         AuthorAttributes {
//             createdAt?: Date;
//             updatedAt?: Date;
//         }

// const Author = sequelize.define<AuthorInstance>(
//     'Author',
//     {
//         id: {
//             allowNull: false,
//             autoIncrement: false,
//             primaryKey: true,
//             type: DataTypes.UUID,
//             unique: true,
//         },
//         firstName: {
//             allowNull: true,
//             type: DataTypes.TEXT,
//         },
//         lastName: {
//             allowNull: false,
//             type: DataTypes.TEXT,
//         },
//         email: {
//             allowNull: true,
//             type: DataTypes.TEXT,
//         },
//     },
//     {}
// );

// Author.hasMany(Book, {
//   /*
//     You can omit the sourceKey property
//     since by default sequelize will use the primary key defined
//     in the model - But I like to be explicit 
//   */
//   sourceKey: 'id',
//   foreignKey: 'authorId',
//   as: 'books'
// });

// Book.belongsTo(Author, {
//   foreignKey: 'authorId',
//   as: 'author'
// });

export default Author;
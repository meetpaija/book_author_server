import { GraphQLDate } from 'graphql-scalars';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';
import { Op } from 'sequelize';

export const resolvers = {
    Date: GraphQLDate,
    Query: {
        getBooks: async (_obj: any, args: { limit?: number, offset?: number, searchByTitle?: string }) => {
            const { rows: data, count: totalCount } = args.searchByTitle ? 
            await Book.findAndCountAll({ include: [Author], limit: args.limit, offset: args.offset, 
                order: [['title', 'ASC']],
                where: { 
                    title: {
                        [Op.like]: `%${args.searchByTitle}%`
                    }
            }}) : 
            await Book.findAndCountAll({ include: [Author], limit: args.limit, offset: args.offset, order: [['title', 'ASC']] });

           return { data: data.map(x=>x.dataValues), totalCount }
        },
        getAuthors: async (_obj: any, args: { limit?: number, offset?: number, searchByName?: string }) => {

            const totalCount = args.searchByName ? 
            await Author.count({
                where: { 
                    name: {
                        [Op.like]: `%${args.searchByName}%`
                    }
            }}) : 
            await Author.count();

            const data = args.searchByName ? 
            Author.findAll({ include: [Book], limit: args.limit, offset: args.offset, order: [['name', 'ASC']], where: { 
                name: {
                    [Op.like]: `%${args.searchByName}%`
                }
            }}) :
            Author.findAll({ include: [Book], limit: args.limit, offset: args.offset, order: [['name', 'ASC']], })

            return { data, totalCount }
        }
    },
    Book: {
        author: (book: Book) => Author.findByPk(book.author_id),
    },
    Author: {
        books: (author: Author) => Book.findAll({ where: { author_id: author.id } }),
    },
    Mutation: {
        addBook: async (_obj: any, args: { book: { title: any; description: any; published_date: any; author_id: any; }}) => {
            const book = await Book.create(args.book);
            return book;
        },
        updateBook: async (_obj: any, args: { id: string, input: { title?: any; description?: any; published_date?: any; author_id?: any; }}) => {
            const book = await Book.findByPk(args.id);
            const updatedBook = await book?.update(args.input);
            return updatedBook;
        },
        deleteBook: async (_obj: any, args: { id: string }) => {
            const book = await Book.findByPk(args.id);
            await book?.destroy();
            return true;
        },
        addAuthor: async (_obj: any, args: { author: { name: any; biography: any; bornDate: any; }}) => {
            const author = await Author.create(args.author);
            return author;
        },
        updateAuthor: async (_obj: any, args: { id: string, input: { name: any; biography: any; bornDate: any; }}) => {
            const author = await Author.findByPk(args.id);
            const updatedAuthor = await author?.update(args.input);
            return updatedAuthor;
        },
        deleteAuthor: async (_obj: any, args: { id: string }) => {
            const author = await Author.findByPk(args.id);
            await author?.destroy();
            return true;
        }
    }
};

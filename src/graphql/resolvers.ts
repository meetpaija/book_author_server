import { GraphQLDate } from 'graphql-scalars';
import { Book } from '../models/book.model';
import { Author } from '../models/author.model';

export const resolvers = {
    Date: GraphQLDate,
    Query: {
        getBooks: () => Book.findAll({ include: [Author] }),
        getAuthors: () => Author.findAll({ include: [Book] }),
    },
    Book: {
        author: (book: Book) => Author.findByPk(book.author_id),
    },
    Author: {
        books: (author: Author) => Book.findAll({ where: { author_id: author.id } }),
    }
};

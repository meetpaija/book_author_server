export const typeDefs = `#graphql

    scalar Date

    type Book {
        id: ID!
        title: String!
        description: String
        published_date: Date
        author_id: ID!
        author: Author
    }

    type BookList {
        data: [Book]!
        totalCount: Int!
    }

    input BookInput {
        title: String!
        description: String
        published_date: Date
        author_id: ID!
    }

    type Author {
        id: ID!
        name: String!
        biography: String
        bornDate: Date
        books: [Book]
    }

    type AuthorList {
        data: [Author]!
        totalCount: Int!
    }

    input AuthorInput {
        name: String!
        biography: String
        bornDate: Date
    }

    type Query {
        getBooks(limit: Int, offset: Int, searchByTitle: String): BookList
        getAuthors(limit: Int, offset: Int, searchByName: String): AuthorList
    }

    type Mutation {
        addBook(book: BookInput!): Book!
        updateBook(id: ID!, input: BookInput): Book!
        deleteBook(id: ID!): Boolean!

        addAuthor(author: AuthorInput!): Author!
        updateAuthor(id: ID!, input: AuthorInput): Author!
        deleteAuthor(id: ID!): Boolean!
    }
`;

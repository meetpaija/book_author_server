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

    type Author {
        id: ID!
        name: String!
        biography: String
        bornDate: Date
        books: [Book]
    }

    type Query {
        getBooks: [Book]
        getAuthors: [Author]
    }
`;

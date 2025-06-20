import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import './config';

const typeDefs = `#graphql
  type Book {
    id: ID!
    title: String
    author: String
  }

  type Query {
    getBooks: [Book],
    getFirstBook(id: ID!): Book,
    getBookByID(id: ID!): Book
  }
`;

const books = [
  { id: 1, title: 'The Awakening', author: 'Kate Chopin' },
  { id: 2, title: 'City of Glass', author: 'Paul Auster' },
];

const resolvers = {
  Query: {
    getBooks: () => books,
    getFirstBook: (_: any, { id }: any) => books[0],
    getBookByID: (_: any, { id }: any) => books.find(book => book.id === +id),
  },
};

async function main() {
  const server = new ApolloServer({ typeDefs, resolvers });
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
  });
  console.log(`🚀  Server ready at ${url}`);
}

main();

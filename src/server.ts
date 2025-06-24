import { ApolloServer } from '@apollo/server';
import { typeDefs } from './graphql/schema';
import { resolvers } from './graphql/resolvers';
import { sequelize } from './config/sequelize';
import { startStandaloneServer } from '@apollo/server/standalone';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

async function startServer() {
  try {
    console.log('Starting server')
    await sequelize.authenticate();
    console.log('Sequelize authenticated');

    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });

    console.log(`Apollo standalone server running at ${url}`);
  } catch (error) {
    console.error('Server failed to start', error);
  }
}

export default startServer;
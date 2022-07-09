const {ApolloServer, gql} = require ("apollo-server");

const fs = require("fs");
const path  = require("path");

const posts =require("./DB");
const resolvers = require("./resolvers");



const theSchema = fs.readFileSync(path.join(__dirname,"./schema.graphqls"), "utf8");
const typeDefs = gql(theSchema);


  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  server.listen(4000).then(() => {
    console.log(`🚀  Server ready at http://localhost:4000/`);
  });
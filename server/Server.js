const express = require('express');

const port = 8080;
const cors = require('cors');
const dataset = require('./DataSet');

// const fs = require('fs');

// fs.readFile('./excel-example.xlsx', (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(data);
// });

// const { graphqlHTTP } = require('express-graphql');
// const {
//   GraphQLSchema,
//   GraphQLInt,
//   GraphQLString,
//   GraphQLObjectType,
// } = require('graphql');

// const UserType = new GraphQLObjectType({
//   name: 'User',
//   fields: () => ({
//     id: { type: GraphQLInt },
//     firstName: { type: GraphQLString },
//     lastName: { type: GraphQLString },
//     email: { type: GraphQLString },
//     password: { type: GraphQLString },
//   }),
// });

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQueryType',
//   fields: {},
// });
// const Mutation = 'mutation';

// const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation });

// const root = {
//   hello: () => 'Hello world!',
// };

const app = express();
app.use(cors());
// app.use('/graphql', graphqlHTTP({ schema, rootValue: root, graphiql: true }));

app.get('/', (req, res) => {
  res.send(dataset);
});

app.listen(port, () => console.log(`Server listening on port ${port}`));

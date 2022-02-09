import express from 'express'
import bodyParser from 'body-parser'
// import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
// import { makeExecutableSchema } from 'graphql-tools';

// const books = [
//     {title: '자바 메모리구조', author: '김땡땡'}
//     ,{title: '디자인패턴', author: '박땡땡'}
//     ,{title: 'v8엔진', author: '오땡땡'}
// ]

// const typeDefs =`
//     type Query {
//         books : [Book]
//     }
//     type Book {
//         title:String
//         author:String
//     }
// `

// const schema = makeExecutableSchema({
//     typeDefs,
// })

const app = express();

// app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

// app.use('/graphiql', graphiqlExpress({endpointURL: '/graphql'}))

app.listen(3000, () => {
    console.log('서버시작');
})

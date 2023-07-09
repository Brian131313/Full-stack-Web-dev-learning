// // need to use terminal to install mongodb package first, command as "npm install mongodb".
// const mongodb = require("mongodb");
// // import mongodb by requiring it in there.

// const MongoClient = mongodb.MongoClient;
// //mongodb package includes class MongoClient.

// let database;

// async function connectToDb() {
//   const client = await MongoClient.connect("mongodb://127.0.0.1");
//   //client object which has internal info about the established connection;
//   //method connect in class MongoClient. keep in mind: with'connect('url'),we connect to a
//   //MongoDB server, NOT to a single database, that happens in a second step with help of
//   //the 'db(...)' method---this method establishes a connection to a specific database on
//   //the overall database server.
//   database = client.db("online-shop");
//   //.db() is a built in method in client object.
// }

// function getDb() {
//   if (!database) {
//     throw new Error("you must connect first!");
//     //Error object built in javascript.
//   }
//   return database;
// }

// module.exports = {
//   connectToDatabase: connectToDb,
//   getDb: getDb,
// };

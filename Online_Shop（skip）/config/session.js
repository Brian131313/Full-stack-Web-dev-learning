const expressSession = require("express-session");
const mongoDbStore = require("connect-mongodb-session");
// npm install connect-mongodb-session.

function createSessionStore() {
  const MongoDbStore = mongoDbStore(expressSession);

  const store = new MongoDbStore({
    url: "mongodb://127.0.0.1:27017",
    databaseName: "online-shop",
    collection: "sessions",
  });
  return store;
}

function createSessionConfig() {
  return {
    secret: "super-secret",
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 60 * 60 * 24 * 1000,
    },
  };
}

module.exports = createSessionConfig;

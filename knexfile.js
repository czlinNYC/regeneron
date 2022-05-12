require("dotenv").config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    searchPath: ["knex", "public"],
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

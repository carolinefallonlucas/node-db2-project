const knex = require("knex");
const env = process.env.NODE_ENV || "development";
const config = require("../knexfile");

const database = knex(config.development);

module.exports = database;
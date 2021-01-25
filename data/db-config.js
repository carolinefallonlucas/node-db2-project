const knex = require('knex');

const config = {
    client: 'sqlite3',
    connection: {
        filename: './data/users.db3'
    },
    useNullAsDefault: true
}; 
        
        // config filename is relative to the root of the project (index.js)

const db = knex(config); 
module.exports = db; 



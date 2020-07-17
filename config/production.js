'use strict';

module.exports = {
    debug: false,
    port: process.env.PORT,

    dbConfig: {
        connectionString: process.env.CONNECTION_STRING
    }
};
// Update with your config settings.

const { on } = require("./src/database/connection");

module.exports = {

  development: {
    client: 'mssql',
    connection: {
      server : '201.47.170.196',
      user : 'sa',
      password : 'BEC@db521',
      database : 'titanium_dev',
      options: {
        trustedconnection: true,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS',
        encrypt: false
      }
    },
    useNullAsDefault: true
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  }
};

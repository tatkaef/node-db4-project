module.exports = {
      development: {
        client: 'sqlite3',
        useNullAsDefault: true, // needed for sqlite
        connection: {
          filename: './data/recipebook.db3', // project - имя базы данных
          
        },
        migrations: {
          directory: './data/migrations'
        },
        seeds: {
          directory: './data/seeds'
        },       
      },
    };
  
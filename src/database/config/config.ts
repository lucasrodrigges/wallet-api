export = {
  client: 'mysql2',
  connection: {
    host: process.env.MYSQLHOST as string,
    port: Number(process.env.MYSQLPORT as string),
    user: process.env.MYSQLUSER as string,
    password: process.env.MYSQLPASSWORD as string,
    database: process.env.MYSQLDATABASE as string,
  },
  pool: { min: 0, max: 10 },
  migrations: {
    directory: './build/database/migrations/',
    tableName: 'wallet-migrations',
  },
};

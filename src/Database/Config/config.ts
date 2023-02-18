import {config} from 'dotenv';

config();


export = {
	client: 'mysql2',
	connection: {
		host: process.env.DB_HOST as string,
		port: process.env.DB_PORT as string,
		user: process.env.DB_USER as string,
		password: process.env.DB_ROOT_PASSWORD as string,
		database: process.env.DB_NAME as string,
	},
	pool: { min: 0, max: 10 },
	migrations: {
		directory: './src/Database/Migrations/',
		tableName: 'wallet_database',
	},
};
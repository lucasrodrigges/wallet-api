import {Options} from 'sequelize';

const config: Options = {
	dialect: 'mysql',
	username: process.env.MYSQLUSER,
	password: process.env.MYSQLPASSWORD,
	database: process.env.MYSQLDATABASE,
	host: process.env.MYSQLHOST,
	port: Number(process.env.MYSQLPORT as string),
};

export = config
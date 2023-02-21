import {type DataTypes, type QueryInterface} from 'sequelize';

export default {
	async up(queryInterface: QueryInterface, Sequelize: typeof DataTypes) {
		await queryInterface.createTable('Users', {
			id: {
				primaryKey: true,
				type: Sequelize.UUID,
				defaultValue: Sequelize.UUIDV4,
			},
			name: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			password: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			deletedAt: {
				type: Sequelize.DATE,
				allowNull: true,
			},
			createdAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.DATE,
			},
			updatedAt: {
				type: Sequelize.DATE,
				defaultValue: Sequelize.DATE,
			},
		});
	},

	async down(queryInterface: QueryInterface) {
		await queryInterface.dropTable('Users');
	},
};

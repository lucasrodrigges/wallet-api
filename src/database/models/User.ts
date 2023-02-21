import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class User extends Model {
  declare id: string;

  declare name: string;

  declare email: string;

  declare password: string;
}

User.init({
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'Users',
});

export default User;

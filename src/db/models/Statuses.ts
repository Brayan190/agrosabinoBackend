import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface StatusAttributes {
  id: number;
  name: string;
  
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface    StatusInput extends Optional<StatusAttributes, 'id'> {}
export interface StatusOuput extends Required<StatusAttributes> {}

class Status extends Model<StatusAttributes,  StatusInput> implements StatusAttributes {
    public id!: number
    public name!: string
   

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Status.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
 
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
  
  export default Status
  
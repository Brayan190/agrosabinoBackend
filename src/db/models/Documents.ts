import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'

interface DocumentAttributes {
  id: number;
  name:string;
  file: string;
  prospectoId:number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface    DocumentInput extends Optional<DocumentAttributes, 'id'> {}
export interface DocumentOuput extends Required<DocumentAttributes> {}

class Document extends Model<DocumentAttributes,  DocumentInput> implements DocumentAttributes {
    public id!: number
    public name!: string;
    public file!: string
    public prospectoId!: number

    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Document.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    file: {
      type: DataTypes.STRING,
      allowNull: false,
      
    },
    prospectoId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
      },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })
  
  export default Document
  
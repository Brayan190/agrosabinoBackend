import { DataTypes, Model, Optional } from 'sequelize'
import sequelizeConnection from '../config'
import Document from './Documents';
import Status from './Statuses';

interface ProspectoAttributes {
  id: number;
  nombre: string;
  primerApellido: string;
  segundoApellido: string;
  calle: string;
  numero:number;
  colonia: string;
  codigoPostal:string;
  telefono:string;
  rfc:string;
  statusId:number;
  observaciones:string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export interface ProspectoInput extends Optional<ProspectoAttributes, 'id'> {}
export interface ProspectoOuput extends Required<ProspectoAttributes> {}

class Prospecto extends Model<ProspectoAttributes, ProspectoInput> implements ProspectoAttributes {
  public id!: number;
  public nombre!: string;
  public primerApellido!: string;
  public segundoApellido!: string;
  public calle!: string;
  public numero!:number;
  public colonia!: string;
  public codigoPostal!:string;
  public telefono!:string;
  public rfc!:string;
  public statusId!:number;
  public observaciones!: string;
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
  }
  
  Prospecto.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    primerApellido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    segundoApellido: {
      type: DataTypes.STRING
    },
    calle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    colonia: {
      type: DataTypes.STRING,
      allowNull: false
    },
    codigoPostal: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isCodigoPostal(value: string) {
          if (!/^\d{5}$/.test(value)) {
            throw new Error('Please enter a valid postal code');
          }
        },
      },

    },
    telefono: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isPhoneNumber(value: string) {
          if (!/^[0-9]{10}$/.test(value)) {
            throw new Error('Please enter a valid phone number');
          }
        }
      }
    },
    rfc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    statusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    observaciones: {
      type: DataTypes.TEXT
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true
  })

  Prospecto.hasMany(Document,{ foreignKey: 'prospectoId', as: 'documents',onDelete: 'cascade', hooks: true  })
  Document.belongsTo(Prospecto,{ foreignKey: 'prospectoId', as: 'Products'})

  Prospecto.belongsTo(Status, { foreignKey: 'statusId', as: 'status' })
  Status.hasMany(Prospecto, { foreignKey: 'statusId', as: 'Orders', onDelete: 'cascade', hooks: true })
  
  export default Prospecto
  
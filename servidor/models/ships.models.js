import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const NaveModel = sequelize.define(
  "nave",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id"
    },
    clasificacionNave: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "clasificacion_nave"
    },
    tipoEscudo: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "tipo_escudo"
    },
    tipoArmadura: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "tipo_armadura"
    },
    espaciosArmas: {
      type: DataTypes.JSON, 
      allowNull: false,
      field: "espacios_armas"
    },
    tipoReactor: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "tipo_reactor"
    },
    tipoMotor: {
      type: DataTypes.STRING(100),
      allowNull: false,
      field: "tipo_motor"
    }
  },
  {
    tableName: "navecaracteristicas",
    paranoid: true,
    underscored: true,
     timestamps: false
  }
);
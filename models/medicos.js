import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const medicos = sequelize.define('medicos',{
    nome: DataTypes.STRING,
    crm: DataTypes.STRING,
    especialidade: DataTypes.STRING,
    telefone: DataTypes.STRING,
    cidade: DataTypes.STRING,
    estado: DataTypes.STRING,
    endereco: DataTypes.STRING
});

export default medicos;
import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const usuarios = sequelize.define('usuarios',{
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,
    password: DataTypes.STRING,
    datebirth: DataTypes.DATE
    
});

export default usuarios;
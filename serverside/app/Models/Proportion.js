import {Model, DataTypes} from 'sequelize';

import sequelize from '../database.js';

class Proportion extends Model {}

Proportion.init({
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    unit: {
        type: DataTypes.TEXT,
        allowNull: false,
    }
}, {
    sequelize,
    modelName: "Proportion",
    tableName: "proportion"
});
export default Proportion;

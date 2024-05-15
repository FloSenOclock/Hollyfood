import {Model, DataTypes} from 'sequelize';

import sequelize from '../database.js';

class Category extends Model {}

Category.init({
    name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: "Category",
    tableName: "category"
});

export default Category;
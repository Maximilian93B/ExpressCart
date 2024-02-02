const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init({
    // define columns
    id: {
      tpye: DataTypes.INTEGER,
      allowNull: false, 
      primaryKey: true, 
      autoIncrement: true, 
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        modal: 'tag',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

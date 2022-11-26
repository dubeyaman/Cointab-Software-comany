'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class loginpage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  loginpage.init({
    userName: DataTypes.STRING,
    EmailID: {
      type:DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:true
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        len:[5,100]
      }
    }
  }, {
    sequelize,
    modelName: 'loginpage',
  });
  return loginpage;
};
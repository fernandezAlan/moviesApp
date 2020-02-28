const sequelize = require("../db/db")
const S = require ("sequelize")
const crypto= require("crypto")
const Model= S.Model

class User extends Model {}
User.init({
    email: {
      type: S.STRING,
      allowNull:false
    } ,
    password:{
      type: S.STRING,
      allowNull:false
    },
      
    salt: {
      type: S.STRING
    }
  }, { sequelize, modelName: 'user' });

  User.prototype.hashPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  }
  
  User.prototype.validPassword = function (password) {
    return this.password === this.hashPassword(password);
  }
  
  User.addHook('beforeCreate', (user) => {
    user.salt = crypto.randomBytes(20).toString('hex');
    user.password = user.hashPassword(user.password); // never saving true password
  })

  module.exports= User
'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userSchema = require('./users.js');
const tourismModel = require('./tourism/model');
const Collection = require('./tourism/collection')

const DATABASE_URL = process.env.DATABASE_URL;

const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);
const tourism = tourismModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users: userSchema(sequelize, DataTypes),
  tourism: new Collection(tourism)
};
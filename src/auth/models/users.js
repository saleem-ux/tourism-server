'use strict';

const bcrypt = require('bcrypt'); //to crypt 
const jwt = require('jsonwebtoken');

const SECRET = process.env.SECRET || 'secretstring';

const userSchema = (sequelize, DataTypes) => {
  const model = sequelize.define('User2', {
    username: { type: DataTypes.STRING, required: true, unique: true },
    password: { type: DataTypes.STRING, requires: true },
    role: {type: DataTypes.ENUM('user', 'writer', 'editor', 'admin'), requires: true, defaultValue:'user'},
    token: {
      type: DataTypes.VIRTUAL,
      get() {
        return jwt.sign({ username: this.username },SECRET);
      },
      set(tokenObj) {
        let token = jwt.sign(tokenObj,SECRET);
        return token;
      },
    },
    capabilities:{
      type: DataTypes.VIRTUAL,
      get(){
        const acl = {
          user: ['read'],
          writer: ['read', 'create'],
          editor:['read', 'create', 'update'],
          admin:['read', 'create', 'update', 'delete']
        };
        return acl[this.role];
      }
    }
  });

  model.beforeCreate(async (user) => {
    let hashedPass = await bcrypt.hash(user.password, 10);
    user.password = hashedPass;
  });

  // Basic AUTH: Validating strings (username, password) 
  model.authenticateBasic = async function (username, password) {
    const user = await this.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) { return user; }
    throw new Error('Invalid User');
  };

  // Bearer AUTH: Validating a token
  model.authenticateToken = async function (token) {
    try {
      const parsedToken = jwt.verify(token, SECRET);
      const user = await this.findOne({ where: { username: parsedToken.username } });
      if (user) { return user; }
      throw new Error('User Not Found');
    } catch (e) {
      throw new Error(e.message);
    }
  };

  return model;
};

module.exports = userSchema;
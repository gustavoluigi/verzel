const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Module = require('../models/Module');
const Class = require('../models/Class');

const connection = new Sequelize(dbConfig);

User.init(connection);
Module.init(connection);
Class.init(connection);

Module.associate(connection.models);
Class.associate(connection.models);

module.exports = connection;

'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + "/../config/config.json")["development"];
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require('./User')(sequelize, Sequelize);
db.Post = require('./Post')(sequelize, Sequelize);
db.PostImgs = require('./PostImgs')(sequelize, Sequelize);
db.Comment = require('./Comment')(sequelize, Sequelize);
db.Likes = require('./Likes')(sequelize, Sequelize);
db.Channel = require('./Channel')(sequelize, Sequelize);
db.Chat = require('./Chat')(sequelize, Sequelize);
db.Message = require('./Message')(sequelize, Sequelize);

db.User.hasMany(db.Post, {foreignKey: 'userId'});
db.User.hasMany(db.Comment, {foreignKey: 'userId'});
db.User.hasMany(db.Likes, {foreignKey: 'userId'});
db.User.hasMany(db.Channel, {foreignKey: 'userId'});
db.User.hasMany(db.Chat, {foreignKey: 'userId'});
db.User.hasMany(db.Message, {foreignKey: 'userId'});

db.Post.hasMany(db.PostImgs, {foreignKey: 'postId'});
db.Post.hasMany(db.Comment, {foreignKey: 'postId'});
db.Post.hasMany(db.Likes, {foreignKey: 'postId'});
db.Post.belongsTo(db.User, {foreignKey: 'userId'});

db.PostImgs.belongsTo(db.Post, {foreignKey: 'postId'});

db.Comment.belongsTo(db.User, {foreignKey: 'userId'});
db.Comment.belongsTo(db.Post, {foreignKey: 'postId'});

db.Likes.belongsTo(db.User, {foreignKey: 'userId'});
db.Likes.belongsTo(db.Post, {foreignKey: 'postId'});

db.Channel.hasMany(db.Chat, {foreignKey: 'channelId'});
db.Channel.hasMany(db.Message, {foreignKey: 'channelId'});
db.Channel.belongsTo(db.User, {foreignKey: 'userId'});

db.Chat.belongsTo(db.User, {foreignKey: 'userId'});
db.Chat.belongsTo(db.Channel, {foreignKey: 'channelId'});

db.Message.belongsTo(db.User, {foreignKey: 'userId'});
db.Message.belongsTo(db.Channel, {foreignKey: 'channelId'});

module.exports = db;

const Comment = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'comment',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            postId:{
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            content: {
                type: DataTypes.STRING(1024),
                allowNull: false,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
        },
        {
            tableName: 'comment',
            freezeTableName: true,
            timestamps: true,
        }
    );
    return model;
}

module.exports = Comment;
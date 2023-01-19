const Likes = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'likes',
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
            postId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'likes',
            freezeTableName: true,
            timestamps: false,
        },
    );
    return model;
}

module.exports = Likes;
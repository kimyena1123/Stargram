const Post = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'post',
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
            content: {
                type: DataTypes.STRING(4096),
                allowNull: false,
            },
            img_src: {
                type: DataTypes.BLOB,
                allowNull: true,
            },
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        },
        {
            tableName: 'post',
            freezeTableName: true,
            timestamps: true,
        }
    );
    return model;
};

module.exports = Post;
const PostImgs = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'postImgs',
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            postId: {
                type: DataTypes.INTEGER,
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
            tableName: 'postImgs',
            freezeTableName: true,
            timestamps: true,
        }
    );

    return model;
};

module.exports = PostImgs;
const User = function(Sequelize, DataTypes){

    const model = Sequelize.define(
        'user', // 테이블 이름
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id:{
                type: DataTypes.STRING(24),
                allowNull: false,
            },
            user_pw:{
                type: DataTypes.STRING(32),
                allowNull: false,
            },
            user_name: {
                type: DataTypes.STRING(16),
                allowNull: false,
            },
            user_birth: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            profile_img: {
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
            },
        },
        {
            tableName: 'user',
            freezeTableName: true,
            timestamps: true,
        }
    );
    return model;
};

module.exports = User;
const Message = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'message',
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
            channelId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            message: {
                type: DataTypes.STRING(5000),
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
            tableName: 'message',
            freezeTableName: true,
            timestamps: true,
        }
    );
    return model;
}

module.exports = Message;
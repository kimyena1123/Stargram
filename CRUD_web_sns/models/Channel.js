const Channel = function(Sequelize, DataTypes){
    const model = Sequelize.define(
        'channel',
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
            tableName: 'channel',
            freezeTableName: true,
            timestamps: true,
        }
    );
    return model;
};

module.exports = Channel;
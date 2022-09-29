const {DataTypes} = require('sequelize')



module.exports= (sequelize) => {
    sequelize.define('animal', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sex: {
            type: DataTypes.ENUM('Male', 'Female'),
            allowNull: true,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.ENUM('Large', 'Meduim', 'Small'),
            allowNull: false,
        },
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },

    })
}
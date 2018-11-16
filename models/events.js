module.exports = function (sequelize, Sequelize) {
    var events = sequelize.define("registry", {
        item: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        quantity: {
            type: Sequelize.INTEGER,
            validate: {
                isAlphanumeric: true,
            }
        },
    });
    return events;
};
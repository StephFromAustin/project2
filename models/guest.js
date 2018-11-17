module.exports = function (sequelize, Sequelize) {
    var guest = sequelize.define("guest", {
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
    return guest;
};
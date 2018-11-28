//Setup for "registry" table
module.exports = function (sequelize, Sequelize) {
    var guest = sequelize.define("guest", {
        item: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },
        //Quantity column set to only accept alphanumeric
        quantity: {
            type: Sequelize.INTEGER,
            validate: {
                isAlphanumeric: true,
            }
        },
    });
    return guest;
};
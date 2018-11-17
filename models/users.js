module.exports = function (sequelize, Sequelize) {
    var users = sequelize.define("users", {
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
    return users;
}
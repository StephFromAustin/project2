module.exports = function (sequelize, Sequelize) {
    var users = sequelize.define("users", {
        item: {
            type: Sequelize.STRING, 
            validae: {
                isAlphanumeric: true, 
            }
        }, 
        quantity: {
            type: Sequelize.INTEGER, 
            validae: {
                isAlphanumeric: true, 
            }
        },
    });
    return users;
}
module.exports = function (sequelize, Sequelize) {
    var event = sequelize.define("main_event", {
        item: {
            type: Sequelize.STRING, 
            validate: {
                isAlphanumeric: true,
            }
        },
        //quantity of what?
        quantity: {
            type: Sequelize.INTEGER, 
            validate: {
                isAlphanumeric: true,
            }
        },
    });
    return event;
};
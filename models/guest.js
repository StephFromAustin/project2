//Setup for "registry" table
module.exports = function (sequelize, Sequelize) {
<<<<<<< HEAD:models/events.js
    var list = sequelize.define("registry", {

        //Item column set to only accept alphanumeric
=======
    var guest = sequelize.define("guest", {
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd:models/guest.js
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
<<<<<<< HEAD:models/events.js
    return list;
};


//Setup for "guest" table
module.exports = function (sequelize, Sequelize) {
    var guests = sequelize.define("guest", {

        //Guest name column set to only accept letters
        guest_name: {
            type: Sequelize.STRING,
            validate: {
                isAlpha: true,
            }
        },
        //Email column set to only accept email format (test@gmail.com)
        email: {
            type: Sequelize.STRING,
            validate: {
                isEmail: true,
            }
        },
        //Phone number column set to only accept 10 numbers
        phone_number: {
            type: Sequelize.STRING,
            validate: {
                isNumeric: true, 
                max: 10,
                min: 10,
            }
        }, 
    });
    return guests;
};


//Setup for "main_event" table
module.exports = function (sequelize, Sequelize) {
    var events = sequelize.define("main_event", {

        //Event name column set to only accept alphanumeric
        event_name: {
            type: Sequelize.STRING,
            validate: {
                isAlphanumeric: true,
            }
        },

        //Event date column 
        //********THIS MIGHT CHANGE DEPENDING ON THE FORMAT*********
        event_date: {
            type: Sequelize.DATE,
        },

        //Phone number column set to only accept 10 numbers
        //********THIS MIGHT CHANGE DEPENDING ON THE FORMAT*********
        event_time: {
            type: Sequelize.TIME,
        }, 
    });
    return events;
=======
    return guest;
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd:models/guest.js
};
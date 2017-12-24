var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
    	var getQuery = 'SELECT * FROM messages;';
    	db.connection.query(getQuery, (error, results) => {
    		if (error) {
    			throw error;
    		}
    		callback(results);
    	});
    }, // a function which produces all the messages

    post: function (msgText, username, room, callback) {
    	var postQuery = `INSERT INTO messages (msg_text, username, room) VALUES (${msgText}, ${username}, ${room});`
    	db.connection.query(postQuery, (error, results) => {
    		if (error) {
    			throw error;
    		}
    		callback(results);
    	});
    } // a function which can be used to insert a message into the database
  },

  // USED ONLY ON TABLE SO..

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};


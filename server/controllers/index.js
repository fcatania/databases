var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    	models.messages.get((results) => {
    		res.json(results);
    	});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
    	models.messages.post(req.body[text], req.body[username], req.body[roomname], (results) => {
    		res.json(results);
    	});
    } // a function which handles posting a message to the database
  },

  // USED ONLY ONE TABLE SO..

  users: {
    // Ditto as above
    get: function (req, res) {
    	console.log('my request: ' + req);
    	console.log('my response: ' + res);
    },
    post: function (req, res) {
    	console.log('my request: ' + req);
    	console.log('my response: ' + res);
    }
  }
};


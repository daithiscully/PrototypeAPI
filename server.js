// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// Bring in the JS functions I have made
var ArtistFunctions = require('./utilities/artistFunctions.js');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;     // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// Here is where I am making the api routes
router.get('/username/:id', function(req, res) {
	var theirId = req.params.id;
	ArtistFunctions.setName(theirId, function(theirName){
		res.json({ 
	    	id: theirId,
	    	name: theirName
		}); 
	}); 
});

router.get('/useremail/:name', function(req, res) {
	var theirName = req.params.name;
	console.log('Their Name ---- = ', theirName)
	ArtistFunctions.setEmail(theirName, function(theirEmail){
		res.json({ 
	    	name: theirName,
	    	email: theirEmail
		}); 
	}); 
});


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

module.exports = app;
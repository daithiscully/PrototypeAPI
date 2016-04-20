// This shouldnt be here, but ....
var setName = function(theirId, callback){
	var theirName;
	switch(theirId) {
	    case '1':
	        theirName = 'Pink Floyd';
	        break;
	    case '2':
	        theirName = 'Led Zeppelin';
	        break;
	    case '3':
	        theirName = 'Metallica';
	        break;
	    case '4':
	        theirName = 'Iron Maiden';
	        break;
	    case '5':
	        theirName = 'Guns \'n Roses';
	        break;
	    default:
	        theirName = 'Unnamed';
	}
	console.log('Just before the callback: Name: ' + theirName);
	callback(theirName);
};

var setEmail = function(theirId, callback){
	var theirEmail;
	switch(theirId) {
	    case '1':
	        theirEmail = 'PinkFloyd@gmail.com';
	        break;
	    case '2':
	        theirEmail = 'LedZeppelin@gmail.com';
	        break;
	    case '3':
	        theirEmail = 'Metallica@gmail.com';
	        break;
	    case '4':
	        theirEmail = 'IronMaiden@gmail.com';
	        break;
	    case '5':
	        theirEmail = 'GunsnRoses@gmail.com';
	        break;
	    default:
	        theirEmail = 'Unnamed@gmail.com';
	}
	console.log('Just before the callback: theirEmail: ' + theirEmail);
	callback(theirEmail);
};

module.exports = {
	setName: setName,
	setEmail: setEmail
}
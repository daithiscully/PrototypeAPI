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

var setEmail = function(theirName, callback){
	var theirEmail;
	switch(theirId) {
	    case 'PinkFloyd':
	        theirEmail = 'PinkFloyd@gmail.com';
	        break;
	    case 'LedZeppelin':
	        theirEmail = 'LedZeppelin@gmail.com';
	        break;
	    case 'Metallica':
	        theirEmail = 'Metallica@gmail.com';
	        break;
	    case 'IronMaiden':
	        theirEmail = 'IronMaiden@gmail.com';
	        break;
	    case 'Guns\'nRoses':
	        theirEmail = 'Guns\'nRoses@gmail.com';
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
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

module.exports = {
	setName: setName
}
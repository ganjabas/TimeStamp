/**
 * This is the description for my class.
 *
 * @class timeStamp
 * @constructor
 */

/**
 * My method description.  Like other pieces of your comment blocks,
 * this can span multiple lines.
 *
 * @method addTimeStamp
 * @param {Collection} eine Liste mit Models
 * @return {void} Returns void on success
 */
exports.addTimeStamp = function(collection) {
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var seconds = currentTime.getSeconds();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear(); 

	if (hours < 10) {
		hours = "0" + hours;
	};
	if (minutes < 10) {
		minutes = "0" + minutes;
	};
	if (seconds < 10) {
		seconds = "0" + seconds;
	};

	/**
	 * My property description.  Like other pieces of your comment blocks,
	 * this can span multiple lines.
	 *
	 * @property model
	 * @type {Model}
	 * @default "foo"
	 */
	var model = Alloy.createModel('timeStampModel', {
		date : day + "." + month + "." + year,
		time : hours + ":" + minutes + ":" + seconds,
		total : day + "." + month + "." + year + " - " + hours + ":" + minutes + ":" + seconds
	});

	collection.add(model);
	model.save();
	collection.fetch();
};

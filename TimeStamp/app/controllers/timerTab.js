var startButtonClicked = false;
var timeStampModels = Alloy.Collections.timeStampModel;
var timeStamp = require('timeStamp');

function startButtonClick(e) {

	if (!startButtonClicked) {

		startButtonClicked = true;

		$.startButtonLabel.applyProperties({
			text : 'STOP'
		});
		timeStamp.addTimeStamp(timeStampModels);
	} else {
		startButtonClicked = false;
		$.startButtonLabel.applyProperties({
			text : 'START'
		});
		timeStamp.addTimeStamp(timeStampModels);
	}
}
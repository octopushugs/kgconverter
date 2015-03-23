chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if(request.trigger == "go") {
		if(window.getSelection() != "undefined") {
			sendResponse({selection: window.getSelection().toString()});
			console.log("window");
		}
		else if(typeof document.getSelection() != "undefined") {
			sendResponse({selection: document.getSelection()});
			console.log("document");
		}
	}
	else {
		sendResponse({}); //do nothing
		console.log("did nothing");
	}
});
chrome.commands.onCommand.addListener(function(command) { //wait for user input
	//sends trigger to content_script to grab user selection
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {trigger: "go"}, function(response) {
			//handles user selection and manipulates it on response
			if(response.selection) {
				var raw = parseFloat(response.selection);
				if (!isNaN(raw)) { //make sure that raw is, in fact, a number before showing user anything
					alert(raw + " kilograms is equivalent to " + raw*2.2 + " pounds.");
				}
				else {
					console.log("that doesn't look like a number");
				}
			}
			else {
				console.log("getSelection didn't do anything");
			}
		});
	});
});

window.error = function(errorMsg, url, lineNumber) {
	console.log("There's been an error");
}

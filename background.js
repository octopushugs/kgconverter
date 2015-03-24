chrome.commands.onCommand.addListener(function(command) { //wait for user input
	//sends trigger to content_script to grab user selection
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.sendMessage(tabs[0].id, {trigger: "go"}, function(response) {
			//handles user selection and manipulates it on response
			var conversionFactor = 1;
			//fetch user preferences
			chrome.storage.sync.get("conversion", function(fetched) {
				var tempCon = fetched.conversion;
				if(tempCon.includes('toKG')) {
					conversionFactor = 0.45;
				} 
				else {
					conversionFactor = 2.2;
				}
				if(response.selection) {
					var raw = parseFloat(response.selection);
					if (!isNaN(raw)) { //make sure that raw is, in fact, a number before showing user anything
						if(conversionFactor === 2.2){
							alert(raw + " kilograms is equivalent to " + raw*conversionFactor + " pounds.");
						}
						else if(conversionFactor === 0.45){
							alert(raw + " pounds is equivalent to " + raw*conversionFactor + " kilograms.");
						}
						else {
							console.log("I'm confused :(");
						}
					}
					else {
						console.log("that doesn't look like a number");
					}
				}
			});
			
			
		});
	});
});




//Saves user preferences 
function save_options() {
	var unit = document.getElementById('units').value;
	chrome.storage.sync.set({
		conversion: unit
	},
	function() {
		//Display something so user knows preferences got saved
		var status = document.getElementById('status');
		status.style.display = "block"; //necessary for using bootstrap
		status.textContent = "Options saved!";
		setTimeout(function() {
			status.textContent = ' ';
			status.style.display = "none";
		}, 750);
	});
}
//When user goes to options page it is populated by their preferences
function restore_options() {
	chrome.storage.sync.get({
		conversion: 'toLB'
	},
	function(items) {
			document.getElementById('units').value = items.conversion;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('status').style.display = 'none';
document.getElementById('save').addEventListener('click', save_options);
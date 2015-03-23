//Saves user preferences 
function save_options() {
	var unit = document.getElementById('units').value;
	chrome.storate.sync.set({
		conversion: unit
	},
	function() {
		//Display something so user knows preferences got saved
		var status = getElementById('status');
		status.textContent = "Options saved!";
		
	});
}
function restore_options() {
	chrome.storage.sync.get({
		conversion: 'toLB'
	},
	function(items) {
		document.getElementById('units').value = item.conversion;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
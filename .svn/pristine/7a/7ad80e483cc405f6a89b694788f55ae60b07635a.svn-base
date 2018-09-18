function makeRandomId() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

function getPropertyValues(obj, seenItems) {
	if (seenItems == null) {
		seenItems = new Set();
	}

	seenItems.add(obj);

	var text = "";
	for (var propertyName in obj) {
		if (!obj.hasOwnProperty(propertyName)) {
			continue;
		}
		var propertyValue = obj[propertyName];

		if (propertyValue !== null && typeof propertyValue === 'object' && !seenItems.has(propertyValue)) {
			propertyValue = getPropertyValues(propertyValue);
			//text += getPropertyValues(propertyValue);
		}

		text += propertyName + ": " + propertyValue + "\n";
		//text += `${propertyName}: ${propertyValue}\n`;
	}
	return text;
}

function showDialog(text) {
	$('#dialogText').text(text);
	$("#dialog").dialog({
		autoOpen: false,
		dialogClass: "no-close",
		buttons: [
			{
				text: "OK",
				click: function () {
					$(this).dialog("close");
				}
			}
		]
	});
	$('#dialog').dialog("open");
}

function setText(elementId, text) {
	var element = document.getElementById(elementId);
	element.textContent = text;
}

function getText(elementId) {
	var element = document.getElementById(elementId);
	var text = element.textContent;

	return text;
}

function insertScriptInPre(preName, id) {
	var target = document.getElementById(preName);
	var script = document.getElementById(id).text.replace(/\t/g, '&nbsp;&nbsp;');

	var codeBlock = "<code class=\"language-js\">" + script + "</code>";

	target.innerHTML = codeBlock;
}
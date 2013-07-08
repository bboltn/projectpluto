Meteor.publish("itemTemplateCol", function() { 
	return itemTemplateCol.find();
});

Meteor.publish("inventoryGroupCol", function() {
	return inventoryGroupCol.find();
});

Meteor.publish("trackedItemCol", function() {
	return trackedItemCol.find();
});

Meteor.methods({
    toDataURL: function toDataURL(data) {
		var QRCode = Meteor.require('qrcode');
		
		var toDataURL = Meteor.sync(function(done) {
			QRCode.toDataURL(data, function(err,url){
				done(null, url);
			});
		});
		
		console.log('toDataURL.result: ' + toDataURL.result);
		return toDataURL.result;
	}
});
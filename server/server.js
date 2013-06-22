Meteor.publish("itemTemplateCol", function() { 
	return itemTemplateCol.find();
});

Meteor.publish("inventoryGroupCol", function() {
	return inventoryGroupCol.find();
});

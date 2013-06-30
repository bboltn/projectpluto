Template.viewInventoryGroupItems.helpers({
	currentInventoryGroupItems: function(){
		var _id = Session.get("currentInventoryGroupId");
		return trackedItemCol.find({parentInventoryGroup: _id});
	}
});

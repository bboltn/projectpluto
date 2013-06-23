Template.viewInventoryGroup.helpers({
	currentInventoryGroup: function(_id){
		if(!_id)
			var _id = Session.get("currentInventoryGroupId");
		return inventoryGroupCol.findOne({_id:_id});
	}
})

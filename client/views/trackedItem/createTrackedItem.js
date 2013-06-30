Template.createTrackedItem.helpers({
	currentGroupInfo: function(){
		//returns dictionary of properties and values

		var action = Session.get("currentTrackedItemAction");
		var _id = Session.get("currentLookupId");
		if(action === "edit") {
			return trackedItemCol.findOne({_id:_id});
		}
		
		if(action === "create"){
			var itemTemplateId = 
				inventoryGroupCol.findOne({_id: _id}).defaultTemplateId;
			var props = itemTemplateCol.findOne({_id: itemTemplateId}).properties;
			var itemValues = {};
			for (var i = 0; i < props.length; i++)
				itemValues[props[i]] = "";

			return {
				_id: "",
				itemValues: itemValues, 
				baseItemTemplateId: itemTemplateId,
				parentInventoryGroup: _id
			}
		}

	}
});

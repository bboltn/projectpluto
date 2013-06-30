Template.createTrackedItem.helpers({
	/*
	* Set the Session variables currentTrackedItemAction and currentLookupId before
	* calling this method.  If the currentTrackedItemAction is edit, the 
	* currentLookupId needs to be a trackedItemCol id.  In this way, it will return
	* a currentItemCol dictionary.  If the currentTrackedItemAction is create, the
	* currentLookupId needs to be a inventoryGroupCol id.  In this way, it will 
	* return an empty trackedItemCol dictionary.
	*
	* @return {_id:String, itemValues:{}, baseItemTemplateId:String, 
	*			parentInventoryGroup:String}
	*/
	currentGroupInfo: function(){
		var action = Session.get("currentTrackedItemAction");
		var _id = Session.get("currentLookupId");
		if(action === "edit") 
			return trackedItemCol.findOne({_id:_id});
		
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

Template.createTrackedItem.events({
	"submit form": function(e){
		e.preventDefault();
		//TODO:
		//create this
		//	{ _id (if present),itemValues{},baseItemTemplateId,
		//	parentInventoryGroup (id), tracking fields }
		//add fields to createTemplate to include names for base, parent, id


	}
	

});

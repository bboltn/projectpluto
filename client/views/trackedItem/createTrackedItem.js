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

		var trackedItem = {
			baseItemTemplateId: $(e.target).find("[name=baseItemTemplateId]").val(),
			parentInventoryGroup: 
				$(e.target).find("[name=parentInventoryGroup]").val()
		};
		
		var _id = $(e.target).find("[name=_id]").val();
		if(_id)
			_.extend(trackedItem, {_id: _id});

		var itemValues = {};

		var itemValuesForm = $("table.table").find("[data-id]");
		for(var i = 0; i < itemValuesForm.length; i++) {
			var fv = itemValuesForm[i];
			var valuePair = {};
			valuePair[fv.attributes["data-id"].value] = fv.value;
			_.extend(itemValues, valuePair);
		}
		_.extend(trackedItem, {itemValues: itemValues});

		Meteor.call("createTrackedItem", trackedItem, function(error, _id) {
			if(error)
				Meteor.Errors.throw(error.message);
			else
				Meteor.Router.to("viewTrackedItem", _id);
		});
	}
});

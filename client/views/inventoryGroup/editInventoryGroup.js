Template.editInventoryGroup.helpers({
	currentInventoryGroup: function(id) {
		if(!id)
			var id = Session.get("currentInventoryGroupId");

		return inventoryGroupCol.findOne(id);

	},
	itemTemplateIds: function(defaultTemplateId) {
		var results = itemTemplateCol.find().fetch();
		_.each(results, function(val) { 
			if(val._id === defaultTemplateId)
				val.selected = true;
		});
		return results;
	}

});

Template.editInventoryGroup.events({
	"submit form": function(e){
		e.preventDefault();

		//createItemTemplate

		var formContent = {
			_id: $(e.target).find("[name=_id]").val(),
			defaultTemplateId: $(e.target).find("[name=ddItemTemplateGroup]").val(),
			name: $(e.target).find("[name=txtName]").val()
		}

		Meteor.call("createInventoryGroup", formContent, function(error, id) {
			if(error)
				Meteor.Errors.throw(error.reason);
			else
				Meteor.Router.to("viewInventoryGroup", id);
		});
	}
});


Template.createInventoryGroup.helpers({
	dropdown: function () {
		return itemTemplateCol.find({}, {sort: {name: 1}});
	}
});

Template.createInventoryGroup.events({
	"submit form":function(e){
		e.preventDefault();
		Meteor.Errors.clear();

		var inventoryGroupProperties = {
			name: $(e.target).find("[name=txtInventoryName]").val(),
			defaultTemplateId: $(e.target).find("[name=ddTemplates]").val()
		}

		Meteor.call("createInventoryGroup", inventoryGroupProperties, 
					function(error, id){
						if(error)
							Meteor.Errors.throw(error.reason);
						else
							Meteor.Router.to("viewInventoryGroup",id);
					}
				   );
			}

});

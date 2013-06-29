Template.viewInventoryGroup.helpers({
	currentInventoryGroup: function(_id){
		if(!_id)
			var _id = Session.get("currentInventoryGroupId");
		return inventoryGroupCol.findOne({_id:_id});
	}
});

Template.viewInventoryGroup.events({
	"click .delete": function(e) {
		e.preventDefault();

		if (confirm("Delete this inventory group?")) {
			Meteor.call("deleteInventoryGroup", {
				_id: e.currentTarget.dataset.id},function(){ 
					Meteor.Router.to("viewInventoryGroupTemplateAll");
			});
		}
	}
});

